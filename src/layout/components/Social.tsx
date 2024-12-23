import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import iconSprite from "../../assets/images/sprite.svg";

export const Social = (props: { socialItems: Array<string> }) => {
    return (
        <StyledSocialList>
            {props.socialItems.map((item, i) => {
                return (
                    <li key={i}>
                        <StyledSocialItem href='#'>
                            <StyleIcon width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <use xlinkHref={`${iconSprite}#${item}`}/>
                            </StyleIcon>
                        </StyledSocialItem>
                    </li>
                )
            })}
        </StyledSocialList>
    );
};

const StyledSocialList = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
`

const StyleIcon = styled.svg`
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