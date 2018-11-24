import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify'
import { withNamespaces } from 'react-i18next'
import axios from 'axios'
import styled from 'styled-components/macro'

import { checkToken, updateToken } from '../lib/helpers'
import { setToken, setLoggedIn, setLoggedOut, setProfile } from '../redux/actions'

import {
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
        console.log(err)
        console.error(err.response)
        this.setState({ signupInProgress: false, ...err.response.data.errors })
      }
    })
  }

  render () {
    const { t } = this.props

    return (
      <StyledSignup>
        { this.state.signupComplete && <Redirect to='/' /> }

        <Form onSubmit={this.submitSignup}>
          <Card>
            <CardHeader>
              <h3>
                <Icon icon='user-plus' className='mr-2' />
                {t('Signup')}
              </h3>
            </CardHeader>
            <CardBody>
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
            </CardBody>
            <CardFooter className='text-right'>
              <Button block color='primary' size='lg' disabled={this.state.signupInProgress}>
                {this.state.signupInProgress ? (<Icon spin icon='spinner' />) : t('Signup')}
              </Button>
            </CardFooter>
          </Card>
        </Form>
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
