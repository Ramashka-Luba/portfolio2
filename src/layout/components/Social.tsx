import React from 'react';
import styled from "styled-components";
import {SocialItem} from "./SocialItem";

export const Social = () => {
    return (
        <StyledSocialList>
            <SocialItem iconId={'in'}/>
            <SocialItem iconId={'git'}/>
            <SocialItem iconId={'email'}/>
            <SocialItem iconId={'telega'}/>
            <SocialItem iconId={'insta'}/>
        </StyledSocialList>
    );
};

const StyledSocialList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-self: center;
`