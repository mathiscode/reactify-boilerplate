import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './lib/i18n'

import App from './App'
import Store from './redux/store'
import * as serviceWorker from './serviceWorker'

/*
Configure your theme in config/site.js
Bootswatch theme is pulled via CDN in App.js Helmet Component
Base theme is loaded here so there's no FOUC
To hardcode a theme and improve performance:
  yarn add bootswatch (or npm install --save bootswatch)
  set SiteTheme to false in config/site.js
  then use import 'bootswatch/dist/[theme]/bootstrap.min.css' below
*/
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootswatch/dist/[theme]/bootstrap.min.css'

// Generally, you should stick to styled components,
// but if you prefer to use SASS, it's included for you here:
import './styles/index.scss'

// Setup global styles with styled components
import GlobalStyle from './style.js'

ReactDOM.render(
  <Provider store={Store}>
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  </Provider>,

  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
