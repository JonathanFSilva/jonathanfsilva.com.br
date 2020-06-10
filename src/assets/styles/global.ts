import { createGlobalStyle } from 'styled-components'

const global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`

export default global
