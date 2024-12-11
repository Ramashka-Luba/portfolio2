import React from 'react';
import styled from "styled-components";

type MenuItemProps = {
    text: string;
}

export const MenuItem = (props:MenuItemProps) => {
    return (
        <li>
            <StyledMenuLink href='#'>{props.text}</StyledMenuLink>
        </li>

    );
};

const StyledMenuLink = styled.a`
    text-decoration: none;
    padding: 10px;
    color: black;
    display: block;
    transition: 0.2s;
    
    &:hover {
        color: #423f3f;
        transform: scale(1.1);
    }
    
    &:active {
        color: #555252;
    }
`