import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type ButtonPropsType = {
    buttontText: string
    type?: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton>
            {props.buttontText}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};;
    padding: 8px 20px;
    width: max-content;;
    transition: 0.2s;

    &:hover {
        background-color: ${theme.colors.hover};
    }

    &:active {
        background-color: ${theme.colors.active};
    }
`