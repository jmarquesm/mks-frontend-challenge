// vendors
import { createGlobalStyle } from 'styled-components'

// styles
import { resetCSS } from './reset-css'

const GlobalStyle = createGlobalStyle`
  ${resetCSS}

  html,
  body {
    font-family: 'Montserrat', sans-serif;
    background: #E5E5E5;
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
