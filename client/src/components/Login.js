import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify'
import { withNamespaces } from 'react-i18next'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'
import styled from 'styled-components/macro'

import { setToken, setLoggedIn, setLoggedOut, setProfile } from '../redux/actions'
import { checkToken, updateToken } from '../lib/helpers'
import { GoogleLoginEnabled, GoogleClientID } from '../config/keys'

import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'

const StyledLogin = styled.div`
  min-width: 250px;
  max-width: 500px;
  margin: auto;
`

class Login extends Component {
  state = {}

  componentDidMount = () => {
    checkToken(this)
  }

  submitLogin = (e) => {
    const { t } = this.props
    e.preventDefault()

    this.setState({
      loginInProgress: true,
      loginEmailError: false,
      loginPasswordError: false,
      loginConfirmPasswordError: false
    }, async () => {
      try {
        // Send login data to server
        const results = await axios.post('/api/users/login', {
          email: this.state.loginEmail,
          password: this.state.loginPassword
        })

        // All is well; save the new token
        this.setState({ loginInProgress: false })
        updateToken(this, results.data.token, results.data.exp)
        this.props.setProfile(results.data.user)
        toast.success(t('Welcome back!'))
      } catch (err) {
        console.error(err.response)
        this.setState({ loginInProgress: false, loginError: err.response.data.message })
      }
    })
  }

  googleOauth = async response => {
    const { t } = this.props

    console.log(response)

    try {
      let results = await axios.post('/api/users/oauth/google', { idToken: response.tokenId })

      // All is well; save the new token
      // TODO: Not DRY, fix later
      this.setState({ loginInProgress: false })
      updateToken(this, results.data.token, results.data.exp)
      this.props.setProfile(results.data.user)
      toast.success(t('Welcome back!'))
    } catch (err) {
      console.error(err.response)
      this.setState({ loginInProgress: false, loginError: `${err.response.data.code} error` })
    }
  }

  render () {
    const { t } = this.props

    return (
      <StyledLogin>
        { this.props.user.loggedIn && <Redirect to='/' /> }

        <Card>
          <CardHeader>
            <h3>
              <Icon icon='sign-in-alt' className='mr-2' />
              {t('Login')}
            </h3>
          </CardHeader>
          <CardBody>
            {
              GoogleLoginEnabled &&
              <GoogleLogin
                clientId={GoogleClientID}
                onSuccess={this.googleOauth}
                onFailure={this.googleOauth}
                render={props => (
                  <Button
                    block outline color='primary' size='lg'
                    disabled={this.state.loginInProgress}
                    onClick={event => {
                      this.setState({ loginInProgress: true })
                      props.onClick()
                    }}
                  >
                    {
                      this.state.loginInProgress ? (<Icon spin icon='spinner' />) : (
                        <React.Fragment>
                          <Icon icon={['fab', 'google']} className='mr-2' />
                          Login with Google
                        </React.Fragment>
                      )
                    }
                  </Button>
                )}
              />
            }

            {
              GoogleLoginEnabled && <hr />
            }

            <Form ref={this.loginForm} onSubmit={this.submitLogin}>
              <FormGroup>
                <Label for='loginEmail'>{t('Email Address')}</Label>
                <Input
                  id='loginEmail'
                  type='email'
                  autoFocus
                  required
                  onChange={(e) => this.setState({ loginEmail: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for='loginPassword'>{t('Password')}</Label>
                <Input
                  id='loginPassword'
                  type='password'
                  required
                  onChange={(e) => this.setState({ loginPassword: e.target.value })}
                />
              </FormGroup>
            </Form>

            {
              this.state.loginError && (
                <Alert color='danger'>
                  <Icon icon='exclamation-triangle' />
                  <span className='ml-2'>{this.state.loginError}</span>
                </Alert>
              )
            }
          </CardBody>
          <CardFooter className='text-right'>
            <Button block color='primary' size='lg'
              disabled={this.state.loginInProgress}
              onClick={this.submitLogin}
            >
              {this.state.loginInProgress ? (<Icon spin icon='spinner' />) : t('Login')}
            </Button>
          </CardFooter>
        </Card>
      </StyledLogin>
    )
  }
}

const mapStateToProps = state => state

export default withRouter(
  connect(mapStateToProps, {
    setToken,
    setLoggedIn,
    setLoggedOut,
    setProfile
  })(
    withNamespaces()(Login)
  )
)
