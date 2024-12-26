import React, {useState} from 'react';
import {Menu} from "../../../components/Menu";
import {Button} from "../../../components/Button.styled";
import {Social} from "../../../components/Social";
import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";
import {menuData} from "../../../../data/menuData";
import {socialData} from "../../../../data/socialData"

export const MobileMenu = () => {

    const [menuIsOpen, setmenuIsOpoen] = useState(false);
    const onBurgderBtnClick = () => {
        setmenuIsOpoen(!menuIsOpen)
    }

    return (
        <StyledMobileMenu>
            <StyledBurgerBtn isOpen={menuIsOpen} onClick={onBurgderBtnClick}>
                <span></span>
            </StyledBurgerBtn>

            <StyledMobileMenuPopup isOpen={menuIsOpen} onClick={() => setmenuIsOpoen(false)}>
                <Social socialItems={socialData}/>
                <Menu menuItems={menuData}/>
                <Button primary>write me</Button>
            </StyledMobileMenuPopup>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`
const StyledBurgerBtn = styled.button<{ isOpen: boolean }>`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 99;
    width: 40px;
    height: 40px;

    span {
        position: relative;
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.primary};

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            position: absolute;
            transform: translateY(-10px);
            left: 0;
            width: 100%;
            height: 2px;
            background-color: ${theme.colors.primary};
            content: '';

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            position: absolute;
            transform: translateY(10px);
            left: 0;
            width: 100%;
            height: 2px;
            background-color: ${theme.colors.primary};
            content: '';

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`

const StyledMobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: ${theme.colors.secondary};
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9;
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        gap: 40px;
    `}
`