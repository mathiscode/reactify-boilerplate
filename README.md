<!-- markdownlint-disable MD033 MD034 MD036 -->

# ![Reactify Boilerplate](https://github.com/mathiscode/reactify-boilerplate/blob/master/.github/logo.png) <!-- omit in toc -->

[![GitHub license](https://img.shields.io/github/license/mathiscode/reactify-boilerplate.svg)](https://github.com/mathiscode/reactify-boilerplate/blob/master/LICENSE.md)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/mathiscode/reactify-boilerplate.svg?branch=master)](https://travis-ci.org/mathiscode/reactify-boilerplate)
[![GitHub issues](https://img.shields.io/github/issues/mathiscode/reactify-boilerplate.svg)](https://github.com/mathiscode/reactify-boilerplate/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/mathiscode/reactify-boilerplate/compare)

> “This is what I have learned, Malenfant. This is how it is, how it was, how it came to be.”
>  
> *― Stephen Baxter, Manifold: Time*

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20Reactify%20Boilerplate&url=https://github.com/mathiscode/reactify-boilerplate&hashtags=react,restify,nodejs,javascript,bootstrap,developers) *Help spread the word and share this project!*  

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue.svg?style=for-the-badge)](http://reactify-boilerplate.mathis.network)

---

<div align="center">
  <img alt="Screenshot" src="https://github.com/mathiscode/reactify-boilerplate/blob/master/.github/screenshot.png">
</div>

---

- [Why Reactify Boilerplate](#why-reactify-boilerplate)
  - [Frontend: React](#frontend-react)
  - [Backend: Restify](#backend-restify)
- [Installing](#installing)
- [Configuring](#configuring)
- [Customizing](#customizing)
  - [Running the development environment](#running-the-development-environment)
- [Testing](#testing)
- [Building](#building)
- [Logging](#logging)
  - [Log to file](#log-to-file)
  - [Log to Logz.io](#log-to-logzio)
  - [Log to Loggly](#log-to-loggly)
- [License](#license)
- [Donate](#donate)
- [Contributing](#contributing)
- [Contributors](#contributors)

---

## Why Reactify Boilerplate

Reinventing the wheel sucks. Reactify Boilerplate lets you get started with a solid foundation for new projects.

### Frontend: React

Reactify Boilerplate uses [React](https://reactjs.org) (via [Create React App](https://github.com/facebook/create-react-app)) as a frontend framework.

Includes:

- [Bootstrap 4](https://getbootstrap.com) (via [reactstrap](https://reactstrap.github.io/))
- [Bootswatch Themes](https://bootswatch.com)
- [React Router](https://reacttraining.com/react-router)
- [Redux](https://redux.js.org/)
- [React-Toastify](https://github.com/fkhadra/react-toastify)
- [FontAwesome](https://fontawesome.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [Particles.js](https://github.com/VincentGarreau/particles.js)
- [Internationalization (via react-i18next)](https://react.i18next.com)
- Local & Google OAuth login/signup

### Backend: Restify

Reactify Boilerplate uses [Restify](http://restify.com) as a backend server.

Includes:

- [Mongoose](https://mongoosejs.com)
- [Internationalization (via i18n)](https://github.com/mashpie/i18n-node)
- User login/signup is already implemented for you

---

## Installing

For best results, you should have [Yarn](https://yarnpkg.com/en/docs/install) installed.

If you're using Windows, you will need to use [Git Bash](https://git-scm.com/download/win) for commands to be successful.

```bash
git clone --depth=1 https://github.com/mathiscode/reactify-boilerplate.git
cd reactify-boilerplate
yarn # or npm install if you prefer
```

***Note**: The `master` branch is where development occurs. You may want to checkout a tagged version instead:*

```bash
git clone --branch [tag] --depth=1 https://github.com/mathiscode/reactify-boilerplate.git
```

*If not using yarn, you will see an error that can be ignored, and you will need to `cd client && npm install` and replace `yarn` with `npm run` in the following commands.* **TL;DR: Just use [Yarn](https://yarnpkg.com).**

## Configuring

```bash
cp .env.example .env
```

Edit `.env` or set environment variables for server configuration

Edit `client/src/config/site.js` for client configuration

Edit `client/src/config/keys.js` for client-side API keys (*eg. Google OAuth*)

## Customizing

Edit/add client components in `client/src/components`

Edit/add server routes in `server.js` (*look for the comment* `// Setup routes`)

`routes/users/index.js` has examples of how to include routes

See more guides in the [Wiki](https://github.com/mathiscode/reactify-boilerplate/wiki)

### Running the development environment

```bash
yarn dev # This will launch both the Restify server and the React development server.
```

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

## Logging

Logs will output to the console if NODE_ENV is not `production`

### Log to file

In `.env` or your environment variables, set:

```INI
LOG_FILE=filename.log
ERROR_LOG_FILE=errors.log
```

### Log to [Logz.io](https://logz.io)

In `.env` or your environment variables, set:

```INI
USE_LOGZIO=true
LOGZIO_API_TOKEN=yourlogziotoken
```

### Log to [Loggly](https://loggly.com)

In `.env` or your environment variables, set:

```INI
USE_LOGGLY=true
LOGGLY_SUBDOMAIN=yourlogglysubdomain
LOGGLY_TOKEN=yourlogglytoken
LOGGLY_TAGS=mytag-1,mytag-2
```

*Note: you may get [a warning](https://github.com/loggly/winston-loggly-bulk/issues/45) about the loggly module; this can be safely ignored.*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Donate

- [**Beerpay.io**](https://beerpay.io/mathiscode/reactify-boilerplate): https://beerpay.io/mathiscode/reactify-boilerplate

- **BTC**: 3722p31ydjezmzbcepCf29DQ8tvjoLUPVB
  
  ![QR Code](https://github.com/mathiscode/reactify-boilerplate/blob/master/.github/mathiscode-btc.png)

- **OR**: Donate some time by submitting a pull request!

## Contributing

Read the [Contribution Guide](https://github.com/mathiscode/reactify-boilerplate/blob/master/CONTRIBUTING.md)

## Contributors

- [J.R. Mathis (mathiscode)](https://github.com/mathiscode)
- See the full list of [contributors](https://github.com/mathiscode/reactify-boilerplate/graphs/contributors)
