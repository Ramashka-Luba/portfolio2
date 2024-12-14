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
    padding: 10px;
`