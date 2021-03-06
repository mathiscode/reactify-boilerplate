import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import { withNamespaces } from 'react-i18next'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

import Loading from './Loading'

import {
  Card,
  CardBody,
  CardHeader
} from 'reactstrap'

class Profile extends Component {
  state = {
    loading: true
  }

  componentDidMount = async () => {
    const { t } = this.props
    if (!this.props.user.loggedIn) return

    try {
      const results = await axios.get('/api/users/profile')
      this.setState({
        loading: false,
        profile: results.data
      })
    } catch (err) {
      console.error(err)
      toast.error(t('There was an error getting your profile'))
    }
  }

  render () {
    const { t } = this.props

    if (!this.props.user.loggedIn) return <Redirect to='/' />

    return (
      <Card>
        <CardHeader>
          <h3>
            <Icon icon='user' className='mr-2' />
            {t('My Profile')}
          </h3>
        </CardHeader>
        <CardBody>
          {
            this.state.loading ? <Loading color='#333' />
              : <pre>{JSON.stringify(this.state.profile, null, 2)}</pre>
          }
        </CardBody>
      </Card>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(withNamespaces()(Profile))
