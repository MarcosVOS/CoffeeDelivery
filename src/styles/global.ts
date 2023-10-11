import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
    }

    body{
        -webkit-font-smoothing: antialiased
    }

    body, input, textarea, button, label{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
`
