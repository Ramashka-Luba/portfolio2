import React from 'react';
import {Menu} from "../../components/Menu";
import {Button} from "../../components/Button.styled";
import {Social} from "../../components/Social";
import {Container} from "../../../styles/Container.styled";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {menuData} from "../../../data/menuData";
import {socialData} from "../../../data/socialData"
import {MobileMenu} from "./mobileMenu/MobileMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <Container paddingBlock={'20px'}>
                <MobileMenu></MobileMenu>
                <StyledNav>
                    <Social socialItems={socialData}/>
                    <Menu menuItems={menuData}/>
                    <Button primary>write me</Button>
                </StyledNav>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.secondary};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    min-height: 80px;

    @media ${theme.media.tablet} {
        background-color: rgba(255, 255, 255, 0.8);
    }
`

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media ${theme.media.tablet} {
        display: none;
    }
`