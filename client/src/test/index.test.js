/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import '../i18n'
import App from '../App'
import Store from '../redux/store'

it('renders without crashing', () => {
  const div = document.createElement('div')
  div.id = 'root'

  ReactDOM.render(
    <Provider store={Store}>
      <App />
    </Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
