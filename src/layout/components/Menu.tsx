import React from 'react';
import styled from 'styled-components';
import {MenuItem} from "./MenuItem";

export const Menu = () => {
    return (
        <nav>
            <StyledMenuList>
                <MenuItem text={'Projects'}/>
                <MenuItem text={'About'}/>
                <MenuItem text={'Digital Assets'}/>
            </StyledMenuList>
        </nav>
    );
};

const StyledMenuList = styled.ul`
    display: flex;
    gap: 12px;;
    justify-self: center;
`

