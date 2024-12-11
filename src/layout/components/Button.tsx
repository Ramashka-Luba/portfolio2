import React from 'react';
import styled from "styled-components";

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
    border: none;
    background-color: #131212;
    color: #fff;
    padding: 8px 20px;
    width: max-content;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: #423f3f;
    }

    &:active {
        background-color: #555252;
    }
`