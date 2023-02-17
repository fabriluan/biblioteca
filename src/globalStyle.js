import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,body,#root{
        height: 100%;
    }

    body{
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
    }
`

export default GlobalStyle;