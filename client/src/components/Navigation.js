import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { withNamespaces } from 'react-i18next'
import CountryFlag from 'react-country-flag'
import i18n from 'i18next'
import axios from 'axios'

import { SiteTitle, NavbarColor, NavbarDark, NavbarFixed } from '../config/site'
import { setToken, setLoggedIn, setLoggedOut, setProfile } from '../redux/actions'
import { checkToken, logout } from '../lib/helpers'

import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown
} from 'reactstrap'

class Navigation extends Component {
  state = {}

  componentWillMount = () => {
    checkToken(this)
    this.setState({ language: i18n.language })
  }

  componentDidMount = () => {
    // returns true if the element or one of its parents has the class classname
    const anyParentHasClass = (element, classname) => {
      if (!element.parentNode) return false
      if (element.className && element.className.split instanceof Function && element.className.split(' ').indexOf(classname) >= 0) return true
      return anyParentHasClass(element.parentNode, classname)
    }

    // Close menu after link click when collapsed
    try {
      const mainNav = document.getElementById('main-nav')
      Array.from(mainNav.querySelectorAll('*')).forEach(link => {
        link.addEventListener('click', (e) => {
          // console.log(e.target)
          if (!anyParentHasClass(e.target, 'dropdown-toggle')) {
            this.setState({ menuOpen: false })
          }
        })
      })
    } catch (err) {
      // Probably testing; ignore
    }
  }

  changeLanguage = (lang) => {
    i18n.changeLanguage(lang, (err) => {
      if (err) return console.error(err)

      this.setState({ language: lang })
      axios.defaults.headers.common['Accept-Language'] = i18n.language || 'en'
      axios.defaults.params = { lng: i18n.language || 'en' }
    })
  }

  logout = () => logout(this)

  render () {
    const { t } = this.props

    return (
      <React.Fragment>
        <Navbar id='main-nav' color={NavbarColor || 'dark'} dark={NavbarDark} expand='md' fixed={NavbarFixed || false}>
          <NavbarBrand href='#' className='animated infinite pulse'>{SiteTitle}</NavbarBrand>
          <NavbarToggler onClick={() => this.setState({ menuOpen: !this.state.menuOpen })} />

          <Collapse isOpen={this.state.menuOpen} navbar>
            <Nav navbar>
              <NavItem active={this.props.location.pathname === '/'}>
                <Link to='/' className='nav-link'>
                  <Icon icon='home' className='mr-1' />
                  <span>{t('Home')}</span>
                </Link>
              </NavItem>

              <NavItem>
                <NavLink href='https://github.com/mathiscode/reactify-boilerplate' target='_blank'>
                  <Icon icon={['fab', 'github']} className='mr-1' />
                  <span>GitHub</span>
                </NavLink>
              </NavItem>
            </Nav>

            <Nav className='ml-auto' navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Icon icon='flag' className='mr-1' />
                  <span className='d-md-none'>Language</span>
                </DropdownToggle>
                <DropdownMenu className='main-nav-dropdown' right>
                  <NavLink onClick={() => this.changeLanguage('en')}>
                    <DropdownItem className={i18n.language === 'en' ? 'active' : ''}>
                      <CountryFlag code='us' svg />
                      <span className='ml-2'>{t('English')}</span>
                    </DropdownItem>
                  </NavLink>

                  <NavLink onClick={() => this.changeLanguage('de')}>
                    <DropdownItem className={i18n.language === 'de' ? 'active' : ''}>
                      <CountryFlag code='de' svg />
                      <span className='ml-2'>{t('Deutsch')}</span>
                    </DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>

              {
                !this.props.user.loggedIn && (
                  <React.Fragment>
                    <NavItem active={this.props.location.pathname === '/login'}>
                      <Link to='/login' className='nav-link'>
                        <Icon icon='sign-in-alt' className='mr-1' />
                        <span>{t('Login')}</span>
                      </Link>
                    </NavItem>
                    <NavItem active={this.props.location.pathname === '/signup'}>
                      <Link to='/signup' className='nav-link'>
                        <Icon icon='user-plus' className='mr-1' />
                        <span>{t('Signup')}</span>
                      </Link>
                    </NavItem>
                  </React.Fragment>
                )
              }

              {
                this.props.user.loggedIn && (
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      <Icon icon='user-circle' size='lg' className='mr-1' />
                      { this.props.user.profile && <span>{this.props.user.profile.email}</span> }
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem tag={Link} to='/profile' active={this.props.location.pathname === '/profile'}>
                        <Icon icon='user' className='mr-1' />
                        <span>{t('My Profile')}</span>
                      </DropdownItem>

                      <DropdownItem divider />

                      <DropdownItem onClick={this.logout}>
                        <Icon icon='sign-out-alt' className='mr-1' />
                        <span>{t('Logout')}</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )
              }
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
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
    withNamespaces()(Navigation)
  )
)
