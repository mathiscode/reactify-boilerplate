# Reactify Boilerplate

[![GitHub license](https://img.shields.io/github/license/mathiscode/reactify-boilerplate.svg)](https://github.com/mathiscode/reactify-boilerplate/blob/master/LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/mathiscode/reactify-boilerplate.svg?branch=master)](https://travis-ci.org/mathiscode/reactify-boilerplate)
[![GitHub issues](https://img.shields.io/github/issues/mathiscode/reactify-boilerplate.svg)](https://github.com/mathiscode/reactify-boilerplate/issues)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
[![Hire Me](https://img.shields.io/badge/Hire%20Me-Please!-blue.svg)](https://www.linkedin.com/in/j-r-mathis-472342146/)
[![Beerpay](https://beerpay.io/mathiscode/reactify-boilerplate/badge.svg?style=beer-square)](https://beerpay.io/mathiscode/reactify-boilerplate)  [![Beerpay](https://beerpay.io/mathiscode/reactify-boilerplate/make-wish.svg?style=flat-square)](https://beerpay.io/mathiscode/reactify-boilerplate?focus=wish)

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue.svg?style=for-the-badge)](https://reactify-boilerplate.herokuapp.com)

**Note**: The demo runs on a free dyno, so it may take a moment to load after waking up.

---

## Frontend: React

Reactify Boilerplate uses [React](https://reactjs.org) (via [Create React App](https://github.com/facebook/create-react-app)) as a frontend framework.

Includes:

* [React Router](https://reacttraining.com/react-router)
* [Redux](https://redux.js.org/)
* [React-Toastify](https://github.com/fkhadra/react-toastify)
* [Bootstrap 4](https://getbootstrap.com) (via [reactstrap](https://reactstrap.github.io/))
* [Bootswatch Themes](https://bootswatch.com)
* [FontAwesome](https://fontawesome.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Internationalization (via react-i18next)](https://react.i18next.com)

## Backend: Restify

Reactify Boilerplate uses [Restify](http://restify.com) as a backend server.

Includes:

* [Mongoose](https://mongoosejs.com)
* [Internationalization (via i18n)](https://github.com/mashpie/i18n-node)
* User login/signup is already implemented for you

---

## Installing

For best results, you should have [Yarn](https://yarnpkg.com/en/docs/install) installed.

If you're using Windows, you will need to use [Git Bash](https://git-scm.com/download/win) for commands to be successful.

```bash
git clone --depth=1 https://github.com/mathiscode/reactify-boilerplate.git
cd reactify-boilerplate
yarn # or npm install if you prefer
```

*If not using yarn, you will see an error that can be ignored, and you will need to `cd client && npm install` and replace `yarn` with `npm run` in the following commands.*

## Configuring

```bash
cp .env.example .env
```

Edit `.env` for server configuration

Edit `client/config/site.js` for client configuration

## Developing

```bash
yarn dev
```

This will launch both the Restify server and the React development server.

## Testing

```bash
# Complete:
yarn test

# Individually:
yarn lint
yarn test-server
yarn test-client
```

## Building

Once you've made some changes to the client, run:

```bash
yarn build
```

This will bundle the React app and place it into the server's /public directory.
