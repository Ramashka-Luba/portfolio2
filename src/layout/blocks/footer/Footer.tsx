import React from 'react';
import styled from "styled-components";
import {Social} from "../../components/Social";
import {Menu} from "../../components/Menu";

export const Footer = () => {
    return (
        <StyledFooter>
            <Social/>
            <Menu/>
            <StyledCopyright>2024 Ramashka Liuba rights reserved :)</StyledCopyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    max-width: 1040px;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-self: center;
    gap: 30px;
    padding-block: 30px 50px;
    border-top: 1px solid ${props => props.theme.primary};
`
const StyledCopyright = styled.small`
    grid-column: span 2;
    justify-self: center;
`