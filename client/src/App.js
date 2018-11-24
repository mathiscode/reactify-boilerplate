import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import i18n from 'i18next'
import axios from 'axios'
import styled from 'styled-components/macro'

import { setProfile } from './redux/actions'
import { SiteTitle, SiteTheme, NavbarFixed, ParticlesEnabled, ParticlesConfig } from './config/site'

// Import some extra third-party stuff
import 'react-toastify/dist/ReactToastify.css'
import 'animate.css/animate.css'
import 'particles.js'

// Setup icon library
import './config/icons.js'

// Import Components
import Login from './components/Login'
import Signup from './components/Signup'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Profile from './components/Profile'

const Content = styled.div`
  padding: 30px;
  padding-top: ${props => NavbarFixed ? `${props.navbarHeight + 30}px` : '30px'};
`

class App extends Component {
  state = {}

  componentWillMount = () => {
    // Request appropriate language from backend
    axios.defaults.headers.common['Accept-Language'] = i18n.language || 'en'
    axios.defaults.params = { lng: i18n.language || 'en' }
  }

  componentDidMount = () => {
    try {
      // Get fixed navbar height
      const navbarHeight = document.getElementById('main-nav').clientHeight
      this.setState({ navbarHeight })

      // Load particles
      if (ParticlesEnabled) {
        window.particlesJS('particles', ParticlesConfig)
      }
    } catch (err) {
      // If this fails, we're probably inside of a test; ignore
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
            <Content navbarHeight={this.state.navbarHeight}>
              <Route path='/' exact component={Home} />
              <Route path='/profile' component={Profile} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
            </Content>
          </React.Fragment>
        </Router>

        <ToastContainer className='Toastify__toast-container' position={toast.POSITION.BOTTOM_RIGHT} />
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { setProfile })(App)
