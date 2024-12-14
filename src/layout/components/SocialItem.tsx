import React from 'react';
import iconSprite from '../../assets/images/sprite.svg';
import styled from "styled-components"
import {theme} from "../../styles/Theme";

type SocialItemPropsType = {
    iconId: string
}

export const SocialItem = (props: SocialItemPropsType) => {
    return (

        <li>
            <StyledSocialItem href='#'>
                <StyleIcon width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <use xlinkHref={ `${iconSprite}#${props.iconId}`}/>
                 </StyleIcon>
            </StyledSocialItem>
        </li>
    );
};

const StyleIcon = styled.svg `
    display: block;
    transition: 0.2s;
`

const StyledSocialItem = styled.a`
    padding: 10px;

    &:hover {
        svg {
            transform: scale(1.1);
            fill: ${theme.colors.hover};
        }
    }

    &:active {
        svg {
            fill: ${theme.colors.active};
        }
    }
`