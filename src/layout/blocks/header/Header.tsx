import React from 'react';
import {Menu} from "../../components/Menu";
import {Button} from "../../components/Button";
import {Social} from "../../components/Social";
import {Container} from "../../../styles/Container";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const Header = () => {
    return (
        <StyledHeader>
            <Container paddingBlock={'20px'}>
                <Social/>
                <Menu/>
                <Button buttontText={'WRITE ME'}/>
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