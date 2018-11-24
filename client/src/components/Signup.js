import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify'
import { withNamespaces } from 'react-i18next'
import { GoogleLogin } from 'react-google-login'
import i18n from 'i18next'
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
  FormText,
  Input,
  Label
} from 'reactstrap'

const StyledSignup = styled.div`
  min-width: 250px;
  max-width: 500px;
  margin: auto;
`

class Signup extends Component {
  state = {}

  componentDidMount = () => {
    checkToken(this)
  }

  submitSignup = (e) => {
    const { t } = this.props
    e.preventDefault()

    this.setState({
      signupInProgress: true,
      signupError: false,
      signupEmailError: false,
      signupPasswordError: false,
      signupConfirmPasswordError: false
    }, async () => {
      try {
        // Send signup data to server
        const results = await axios.post('/api/users/signup', {
          email: this.state.signupEmail,
          password: this.state.signupPassword,
          confirm: this.state.signupConfirmPassword
        })

        // All is well; save the new token
        updateToken(this, results.data.token, results.data.exp)
        this.setState({ signupInProgress: false, signupComplete: true })
        this.props.setProfile(results.data.user)
        toast.success(t('Thanks for joining us!'))
      } catch (err) {
        console.error(err.response)
        this.setState({ signupInProgress: false, ...err.response.data.errors })
      }
    })
  }

  googleOauth = async response => {
    const { t } = this.props

    // console.log(response)

    try {
      let results = await axios.post('/api/users/oauth/google', { idToken: response.tokenId })

      // All is well; save the new token
      // TODO: Not DRY, fix later
      if (results.data.locale) i18n.changeLanguage(results.data.locale)
      updateToken(this, results.data.token, results.data.exp)
      this.setState({ signupInProgress: false, signupComplete: true })
      this.props.setProfile(results.data.user)
      toast.success(t('Thanks for joining us!'))
    } catch (err) {
      console.error(err.response)
      this.setState({ signupInProgress: false, signupError: `${err.response.data.code} error` })
    }
  }

  render () {
    const { t } = this.props

    return (
      <StyledSignup>
        { this.state.signupComplete && <Redirect to='/' /> }

        <Card>
          <CardHeader>
            <h3>
              <Icon icon='user-plus' className='mr-2' />
              {t('Signup')}
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
                    disabled={this.state.signupInProgress}
                    onClick={event => {
                      this.setState({ signupInProgress: true })
                      props.onClick()
                    }}
                  >
                    {
                      this.state.signupInProgress ? (<Icon spin icon='spinner' />) : (
                        <React.Fragment>
                          <Icon icon={['fab', 'google']} className='mr-2' />
                          {t('Signup with Google')}
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

            <Form onSubmit={this.submitSignup}>
              <FormGroup>
                <Label for='loginEmail'>{t('Email Address')}</Label>
                <Input
                  id='loginEmail'
                  type='email'
                  autoFocus
                  required
                  invalid={Boolean(this.state.signupEmailError)}
                  onChange={(e) => this.setState({ signupEmail: e.target.value })}
                />
                <FormText color='danger'>{this.state.signupEmailError}</FormText>
              </FormGroup>
              <FormGroup>
                <Label for='loginPassword'>{t('Password')}</Label>
                <Input
                  id='loginPassword'
                  type='password'
                  required
                  invalid={Boolean(this.state.signupPasswordError)}
                  onChange={(e) => this.setState({ signupPassword: e.target.value })}
                />
                <FormText color='danger'>{this.state.signupPasswordError}</FormText>
              </FormGroup>
              <FormGroup>
                <Label for='loginConfirmPassword'>{t('Confirm Password')}</Label>
                <Input
                  id='loginConfirmPassword'
                  type='password'
                  required
                  invalid={Boolean(this.state.signupConfirmPasswordError)}
                  onChange={(e) => this.setState({ signupConfirmPassword: e.target.value })}
                />
                <FormText color='danger'>{this.state.signupConfirmPasswordError}</FormText>
              </FormGroup>
            </Form>

            {
              this.state.signupError && (
                <Alert color='danger'>
                  <Icon icon='exclamation-triangle' />
                  <span className='ml-2'>{t(this.state.signupError)}</span>
                </Alert>
              )
            }
          </CardBody>
          <CardFooter className='text-right'>
            <Button block color='primary' size='lg'
              disabled={this.state.signupInProgress}
              onClick={this.submitSignup}
            >
              {this.state.signupInProgress ? (<Icon spin icon='spinner' />) : t('Signup')}
            </Button>
          </CardFooter>
        </Card>
      </StyledSignup>
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
    withNamespaces()(Signup)
  )
)
