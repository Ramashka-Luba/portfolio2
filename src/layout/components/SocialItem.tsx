import React from 'react';
import iconSprite from '../../assets/images/sprite.svg';
import styled from "styled-components"

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

    &:hover {
        fill: #423f3f;
    }

    &:active {
        fill: #555252;
    }
`

const StyledSocialItem = styled.a`
    display: block;
    padding: 10px;

    &:hover {
        svg {
            transform: scale(1.2);
            fill: #423f3f;
        }
    }

    &:active {
        svg {
            fill: #555252;
        }
    }
`