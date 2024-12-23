import React from 'react';
import {Menu} from "../../components/Menu";
import {Button} from "../../components/Button.styled";
import {Social} from "../../components/Social";
import {Container} from "../../../styles/Container";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {menuData} from "../../../data/menuData";
import {socialData} from "../../../data/socialData"

export const Header = () => {
    return (
        <StyledHeader>
            <Container paddingBlock={'20px'}>
                <Social socialItems={socialData}/>
                <Menu menuItems={menuData}/>
                <Button primary>write me</Button>
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
`