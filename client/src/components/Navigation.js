import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { withNamespaces } from 'react-i18next'
import CountryFlag from 'react-country-flag'
import i18n from 'i18next'

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
    // Close menu after link click when collapsed
    Array.from(document.querySelectorAll('.nav-link')).forEach(link => {
      link.addEventListener('click', (e) => {
        if (e.target.id !== 'language-dropdown') {
          this.setState({ menuOpen: false })
        }
      })
    })
  }

  logout = () => logout(this)

  render () {
    const { t } = this.props

    return (
      <div>
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
                <DropdownToggle id='language-dropdown' nav caret>
                  <Icon icon='flag' className='mr-1' />
                  <span className='d-md-none'>Language</span>
                </DropdownToggle>
                <DropdownMenu className='main-nav-dropdown' right>
                  <NavLink href='?lng=en'>
                    <DropdownItem className={this.state.language === 'en' ? 'active' : ''}>
                      <CountryFlag code='us' svg />
                      <span className='ml-2'>{t('English')}</span>
                    </DropdownItem>
                  </NavLink>

                  <NavLink href='?lng=de'>
                    <DropdownItem className={this.state.language === 'de' ? 'active' : ''}>
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
                  <div>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        <Icon icon='user-circle' size='lg' className='mr-1' />
                        { this.props.user.profile && <span>{this.props.user.profile.email}</span> }
                      </DropdownToggle>
                      <DropdownMenu className='main-nav-dropdown' right>
                        <Link to='/profile'>
                          <DropdownItem active={this.props.location.pathname === '/profile'}>
                            {t('My Profile')}
                          </DropdownItem>
                        </Link>

                        <DropdownItem divider />

                        <DropdownItem onClick={this.logout}>
                          <Icon icon='sign-out-alt' className='mr-1' />
                          {t('Logout')}
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                )
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
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
