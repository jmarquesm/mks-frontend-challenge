// vendors
import { createGlobalStyle } from 'styled-components'

// styles
import { resetCSS } from './reset-css'

const GlobalStyle = createGlobalStyle`
  ${resetCSS}

  html,
  body {
    font-family: 'Montserrat', sans-serif;
    background: #f9f9f9;
  }

  body.disable-scroll {
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  button {
    font-family: inherit;
    border: none;
    outline: none;
    background: none;
  }
`

export default GlobalStyle
