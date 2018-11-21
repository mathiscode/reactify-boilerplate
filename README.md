# Reactify Boilerplate

[![GitHub license](https://img.shields.io/github/license/mathiscode/reactify-boilerplate.svg)](https://github.com/mathiscode/reactify-boilerplate/blob/master/LICENSE)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/mathiscode/reactify-boilerplate.svg?branch=master)](https://travis-ci.org/mathiscode/reactify-boilerplate)
[![GitHub issues](https://img.shields.io/github/issues/mathiscode/reactify-boilerplate.svg)](https://github.com/mathiscode/reactify-boilerplate/issues)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
[![Hire Me](https://img.shields.io/badge/Hire%20Me-Please!-blue.svg)](https://www.linkedin.com/in/j-r-mathis-472342146/)
[![Beerpay](https://beerpay.io/mathiscode/reactify-boilerplate/badge.svg?style=beer-square)](https://beerpay.io/mathiscode/reactify-boilerplate)  [![Beerpay](https://beerpay.io/mathiscode/reactify-boilerplate/make-wish.svg?style=flat-square)](https://beerpay.io/mathiscode/reactify-boilerplate?focus=wish)

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue.svg?style=for-the-badge)](https://reactify-boilerplate.herokuapp.com) **Note**: The demo runs on a free dyno, so it may take a moment to load after waking up.

---

## Why Reactify Boilerplate

Reinventing the wheel sucks. Reactify Boilerplate lets you get started with a solid foundation for new projects.

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

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Donate

* [**Beerpay.io**](https://beerpay.io/mathiscode/reactify-boilerplate): https://beerpay.io/mathiscode/reactify-boilerplate

* **BTC**: [3722p31ydjezmzbcepCf29DQ8tvjoLUPVB](bitcoin:3722p31ydjezmzbcepCf29DQ8tvjoLUPVB)
  
  ![QR Code](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADvklEQVR4nO2Wy44jMQwD8/8/vXsJfJpGWyIl23ERyKn1oOgaYD7/0NX6rDaA1goALhcAXC4AuFwAcLkeAfh8Pq2/t/3q97d693x3vzvf4WM2AADQ8tkt3+FjNgAA0PLZLd/hYzYAANDy2S3f4SMbgCr1QaoC6bpvl3wBoEgAYDL4VA8A2v5Rpw6oNvhUDwDa/lGXHaAGXj1fnbf6garzHXW7GgQAAAAAAAAAAGia/ybV7273j7qqg3cPAAC+dVUH7x4AAHzrqg7ePQAA+NZVHbz6gap/br/d+Y66XQ0CAAAAAAAAwLYAqFLnq4HsVu8WABxW7xYAHFbvFgAcVu+WHYDqX/SAX/vene/w8fgBAAAAAAAAAG4FYHft9gCn6ljnAODRsc4BwKNjnQOAR2X/BL4uPuwBq+9V78vuAwAA8BgAAO1e9b7sPgAAgB4D1fWrv7vv7QIUAAAgNxAAAAAAAMBnWD1Q9aPu775P3Tf6XIYAoPc+dd/ocxkCgN771H2jz2UIAHrvU/eNvunCoAH1AaqBc/vr7nfNBwAA8AwEgN5+13wAAIC5AdUP4AZMnef2p/pV6x/nzC4AAAAAAAAAgGsBqDasHtQN6G6AZO8HgMl+AAh+r5731g8AAAAACgCuBdkAqgOK+nXnU/3gABD87q4HANEwAAAAAKwEwB2Y+yAVyN3ujebhEgBscm80D5cAYJN7o3m4BACb3BvNw6X0P4HR+q6DuvyqD+z2n+0HgKRfAAjWA0Ct/2w/ACT9XgdAdIEamBsQ9wOr+1bPG3PTjQAg7Vs9b8xNNwKAtG/1vDE33QgA0r7V88bc2YWqodVAqACofqL3Rr9nBQAA4DG8uv71UAD425fL8Or610MB4G9f6cZiw+6A3fXVwET3Z+8DAADICQAAAABuAsD94FUHufa5/Vb/snkBAADkAswunA1Ina/uc/sFgGBA6nx1n9vv8QB0S31wdZ8acDWwKiBjT9hZkwAAAAAAAABgGQBuA1mDLrn3q/e5AcreAwAA4DkQAAAAAH4ZALfUA08DTu2v8g8ARQKAt8UAEOoHAADYCwA1cPdB7sDfvrvzqf493l0VCACsf3QAMPYDgHhgdH5UAPBjAHQ/SPV9UUCrgR512QEAAAAAAAAAAABNALgD3PVBZvtd9wEAAOQMA0BMAGCe/yYAKAZAVTcA3UBE/0BWAQYAk37c/gEAAAAAAA4CoPoX3e8KILtPzSvqv+p+AEjuU/OK+gcAAAAAAGgEAN0hALhcAHC5AOByAcDlAoDL9R9KCnz1Z6olUAAAAABJRU5ErkJggg==)

* **OR**: Donate some time by submitting a pull request!

## Contributors

* [J.R. Mathis (mathiscode)](https://github.com/mathiscode)
