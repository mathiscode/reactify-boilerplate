import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { library as IconLibrary } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import i18n from 'i18next'
import axios from 'axios'

import 'react-toastify/dist/ReactToastify.css'
import 'animate.css/animate.css'
import 'particles.js'

import { setProfile } from './redux/actions'
import { SiteTitle, SiteTheme, NavbarFixed } from './config/site'

// Import Components
import Login from './components/Login'
import Signup from './components/Signup'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Profile from './components/Profile'

// Setup icon library
import {
  faSpinner,
  faHome,
  faAtlas,
  faSignInAlt,
  faUserPlus,
  faSignOutAlt,
  faExclamationTriangle,
  faUserCircle,
  faFlag
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub
} from '@fortawesome/free-brands-svg-icons'

IconLibrary.add(
  faSpinner,
  faHome,
  faAtlas,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
  faExclamationTriangle,
  faUserCircle,
  faGithub,
  faFlag
)

class App extends Component {
  componentWillMount = () => {
    // Request appropriate language from backend
    axios.defaults.headers.common['Accept-Language'] = i18n.language || 'en'
    axios.defaults.params = { lng: i18n.language || 'en' }
  }

  componentDidMount = () => {
    // Adjust padding for fixed navbars
    switch (NavbarFixed) {
      case 'top':
        try {
          document.getElementById('content').style.paddingTop = '90px'
        } catch (err) {
          // Most likely, we're running a test; ignore
          // I'm sure there's a better way, but it works
        }

        break
      default:
    }
  }

  render () {
    return (
      <div>
        <Helmet>
          <title>{SiteTitle}</title>
          { SiteTheme && <link href={`https://stackpath.bootstrapcdn.com/bootswatch/4.1.3/${SiteTheme}/bootstrap.min.css`} rel='stylesheet' crossorigin='anonymous' /> }
        </Helmet>

        <Router>
          <React.Fragment>
            <Navigation />
            <div id='content'>
              <Route path='/' exact component={Home} />
              <Route path='/profile' component={Profile} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
            </div>
          </React.Fragment>
        </Router>

        <ToastContainer className='Toastify__toast-container' position={toast.POSITION.BOTTOM_RIGHT} />
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { setProfile })(App)
