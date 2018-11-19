import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import { withNamespaces } from 'react-i18next'
import axios from 'axios'

import Loading from './Loading'

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
    if (!this.props.user.loggedIn) return <Redirect to='/' />
  
    return (
      <div style={{ padding: 50 }}>
        {
          this.state.loading ? <Loading className='supercenter' />
          :
          <pre>{JSON.stringify(this.state.profile, null, 2)}</pre>
        }
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(withNamespaces()(Profile))