import { createGlobalStyle } from 'styled-components'
import { resetCSS } from './reset-css'

const GlobalStyle = createGlobalStyle`
  ${resetCSS}

  html,
  body {
    font-family: 'Montserrat', sans-serif;
    line-height: 19px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
