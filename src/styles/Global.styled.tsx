import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`

    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus-visible {
        outline: 2px solid #5da0f8;
    }

    body {
        margin: 0;
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        display: block;
        text-decoration: none;
        color: ${theme.colors.primary};
        transition: 0.2s;

        &:hover {
            transform: scale(1.1);
            color: ${theme.colors.hover};
        }

        &:active {
            color: ${theme.colors.active};
        }
    }

    li {
        list-style: none;
    }

    button {
        background-color: unset;
        border: unset;
        cursor: pointer;
    }
`