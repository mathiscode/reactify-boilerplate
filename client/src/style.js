import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  html {
    height: 100vh;
    min-height: 100vh;
  }

  body {
    height: 100vh;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100vh;
    min-height: 100vh;
    >div {
      height: 100vh;
      min-height: 100vh;
    }
  }

  .nav-link, .dropdown-item {
    cursor: pointer;
  }

  a {
    &:hover {
      /* Yes, this is !important. Yes, it's bad practice. Yes, it makes life easier. */
      text-decoration: none !important;
    }
  }

  #particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`
