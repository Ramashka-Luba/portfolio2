import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

type ButtonPropsType = {
    primary?: boolean
    secondary?: boolean
}

export const Button = styled.button<ButtonPropsType>`
    width: max-content;
    transition: 0.2s;
    text-transform: uppercase;
    padding: 8px 20px;
    font-size: 16px;
    line-height: 24px;

    ${props => props.primary && css<ButtonPropsType>`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.secondary};

        &:hover {
            background-color: ${theme.colors.hover};
        }

        &:active {
            background-color: ${theme.colors.active};
        }
    `}

    ${props => props.secondary && css<ButtonPropsType>`
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primary};

        &:hover {
            background-color: #e4e4e4;
        }

        &:active {
            background-color: #bdbcbc
        }
    ;
    }
    `}
`