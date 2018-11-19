/* eslint-disable react/jsx-no-target-blank */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Card,
  CardBody,
  CardHeader,
} from 'reactstrap'

class Home extends Component {
  render () {
    return (
      <div>
        <Card>
            <CardHeader><h3>What is Reactify Boilerplate?</h3></CardHeader>
            <CardBody>
              <h4>Frontend: React</h4>
              <p>
                Reactify Boilerplate uses <a href='https://reactjs.org' target='_blank'>React</a> 
                {' '}
                (via <a href='https://github.com/facebook/create-react-app' target='_blank'>Create React App</a>) as a frontend framework.
              </p>
              <p>Includes:</p>
              <ul>
                <li><a href='https://reacttraining.com/react-router' target='_blank'>React Router</a></li>
                <li><a href='https://redux.js.org/' target='_blank'>Redux</a></li>
                <li><a href='https://github.com/fkhadra/react-toastify' target='_blank'>React-Toastify</a></li>
                <li><a href='https://getbootstrap.com' target='_blank'>Bootstrap 4</a> (via <a href='https://reactstrap.github.io/' target='_blank'>reactstrap</a>)</li>
                <li><a href='https://bootswatch.com' target='_blank'>Bootswatch Themes</a></li>
                <li><a href='https://fontawesome.com' target='_blank'>FontAwesome</a></li>
                <li><a href='https://daneden.github.io/animate.css' target='_blank'>Animate.css</a></li>
                <li><a href='https://react.i18next.com' target='_blank'>Internationalization (via react-i18next)</a></li>
              </ul>

              <hr />

              <h4>Backend: Restify</h4>
              <p>Reactify Boilerplate uses <a href='http://restify.com'>Restify</a> as a backend server.</p>
              <p>Includes:</p>
              <ul>
                <li><a href='https://mongoosejs.com' target='_blank'>Mongoose</a></li>
                <li><a href='https://github.com/mashpie/i18n-node' target='_blank'>Internationalization (via i18n)</a></li>
                <li>User login/signup is already implemented for you</li>
              </ul>
            </CardBody>
          </Card>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Home)