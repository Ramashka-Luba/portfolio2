import React from 'react';
import {Menu} from "../../components/Menu";
import {Button} from "../../components/Button";
import {Social} from "../../components/Social";
import {Container} from "../../components/Container";

export const Header = () => {
    return (
        <header>
            <Container paddingBlock={'20px'}>
                <Social/>
                <Menu/>
                <Button buttontText={'WRITE ME'}/>
            </Container>
        </header>
    );
};