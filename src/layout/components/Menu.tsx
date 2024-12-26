import React from 'react';
import styled from 'styled-components';
import {theme} from "../../styles/Theme";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenuList>
            {props.menuItems.map((item, i) => {
                return (
                    <StyledMenuItem key={i}>
                        <StyledMenuLink href="#">{item}</StyledMenuLink>
                    </StyledMenuItem>
                )
            })}
        </StyledMenuList>
    );
};


const StyledMenuList = styled.ul`
    display: flex;
    gap: 12px;;

    @media ${theme.media.tablet} {
        order: 1;
        flex-direction: column;
    }
`

const StyledMenuItem = styled.li`

    @media ${theme.media.tablet} {
        border-bottom: 1px solid ${theme.colors.primary};
    }
`

const StyledMenuLink = styled.a`
    padding: 10px;
`