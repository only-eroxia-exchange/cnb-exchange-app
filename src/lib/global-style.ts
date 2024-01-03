import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    min-width: 320px;
    background: #fff;
    font-size: 17px;
    font-family: Lato,system-ui,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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
