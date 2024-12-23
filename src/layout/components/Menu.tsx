import React from 'react';
import styled from 'styled-components';

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <nav>
            <StyledMenuList>
                {props.menuItems.map((item, i) => {
                    return (
                        <li key={i}>
                            <StyledMenuLink href="#">{item}</StyledMenuLink>
                        </li>
                    )
                })}
            </StyledMenuList>
        </nav>
    );
};

const StyledMenuList = styled.ul`
    display: flex;
    gap: 12px;;
    justify-self: center;
`

const StyledMenuLink = styled.a`
    padding: 10px;
`