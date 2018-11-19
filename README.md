# Reactify Boilerplate
[![GitHub license](https://img.shields.io/github/license/mathiscode/reactify-boilerplate.svg)](https://github.com/mathiscode/reactify-boilerplate/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/mathiscode/reactify-boilerplate.svg?branch=master)](https://travis-ci.org/mathiscode/reactify-boilerplate)
[![GitHub issues](https://img.shields.io/github/issues/mathiscode/reactify-boilerplate.svg)](https://github.com/mathiscode/reactify-boilerplate/issues)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
[![Hire Me](https://img.shields.io/badge/Hire%20Me-Please!-blue.svg)](https://www.linkedin.com/in/j-r-mathis-472342146/)
[![Beerpay](https://beerpay.io/mathiscode/reactify-boilerplate/badge.svg?style=beer-square)](https://beerpay.io/mathiscode/reactify-boilerplate)  [![Beerpay](https://beerpay.io/mathiscode/reactify-boilerplate/make-wish.svg?style=flat-square)](https://beerpay.io/mathiscode/reactify-boilerplate?focus=wish)

[Live Demo](https://reactify-boilerplate.herokuapp.com)

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

```bash
git clone --depth=1 https://github.com/mathiscode/reactify-boilerplate.git
cd reactify-boilerplate
yarn # or npm install if you prefer
```

## Configuring
```bash
cp .env.example .env
```

Edit `.env` for server configuration

Edit `client/config/site.js` for client configuration

## Developing

During development, run:

```bash
yarn run dev
```

This will launch both the Restify server and the React development server.

## Building

Once you've made some changes to the client, run:

```bash
yarn build
```

This will bundle the React app and place it into the server's /public directory.

---

### More docs coming soon!
