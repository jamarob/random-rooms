import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --color-blue: #193251;
    --color-orange: #FF5A36;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    font-size: 112.5%;
    font-family: sans-serif;
    background: var(--color-blue);
    color: white;
  }

`
