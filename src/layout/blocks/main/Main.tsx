import React from 'react';
import styled from "styled-components";
import Photo3 from '../../../assets/images/Photo3.jpg'
import {Container} from "../../../styles/Container.styled";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <ContainerMain
                maxWidth={'1200px'}
            >
                <StyleWrap>
                    <StyleTitle>HELLO <br/> I’M</StyleTitle>
                    <StyledSvg viewBox="0 0 200 200">
                        <defs>
                            <path id="testPath" d="M15,100a85,85 0 1,0 170,0a85,85 0 1,0 -170,0" fill="#E7E7E7"
                                  opacity={0}></path>
                        </defs>
                        <use xlinkHref="#testPath" fill="none"></use>
                        <text dx="25" dy="10">
                            <textPath xlinkHref="#testPath">FRONTEND DEVELOPER</textPath>
                        </text>
                    </StyledSvg>
                </StyleWrap>

                <StyledImage>
                    <StyledPhoto src={Photo3} alt={'Photo3'}/>
                </StyledImage>
            </ContainerMain>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    display: flex;
    align-items: center;
    min-height: calc(100vh - 85px);
    margin-top: 85px;
`

const StyleWrap = styled.div`
    position:relative;
    margin-bottom: 150px;
    z-index: 1;
    max-width: 610px;

    @media ${theme.media.tablet} {
        margin-bottom: 100px;
    }
`

const StyleTitle = styled.h1`
    ${font({weight: 800, Fmax: 140, Fmin: 75})};
    text-align: center;
`

const StyledSvg = styled.svg`
    position: absolute;
    bottom: -30%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 500px;
    width: 100%;

    textPath {
        font-size: 20px;
        font-weight: 700;
    }
`

const StyledImage = styled.div`
    position: relative;
    transform: rotate(7deg);
    right: 50px;

    &::after {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: clamp(12.5rem, 5.893rem + 33.04vw, 35.625rem);
        height: 100%;
        background-color: #E7E7E7;
        transform: rotate(-15deg);
        content: '';
    }

    @media ${theme.media.tablet} {
        right: 0;
    }
`

const StyledPhoto = styled.img`
    display: block;
    object-fit: cover;
    width: clamp(12.5rem, 5.893rem + 33.04vw, 35.625rem);
`

const ContainerMain = styled(Container)`
    padding-block: 0 50px;

    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items: center;
    }


`