import React from 'react';
import styled from "styled-components";
import Photo from '../../../assets/images/photo.jpg'

export const Main = () => {
    return (
        <StyledMain>
            <StyleWrap>
                <StyleTitle>HELLO I’M</StyleTitle>
                <StyledSvg viewBox="0 0 200 200" width="600">
                    <defs>
                        <path id="testPath" d="M15,100a85,85 0 1,0 170,0a85,85 0 1,0 -170,0"></path>
                    </defs>
                    <use xlinkHref="#testPath" fill="none"></use>
                    <text dx="20" dy="10">
                        <textPath xlinkHref="#testPath">FRONTEND DEVELOPER</textPath>
                    </text>
                </StyledSvg>
            </StyleWrap>

            <StyledImage>
                <img src={Photo} alt={'Photo3'}/>
            </StyledImage>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    position: relative;
    display: flex;
    height: 865px;
    max-width: 1200px;
    margin-inline: auto;
`

const StyleWrap = styled.div`
    position:relative;
    width: max-content;
    padding-top: 130px;
`

const StyleTitle = styled.h1`
    position: relative;
    z-index: 1;
    max-width: 650px;
    margin: 0;
    font-size: 150px;
    font-weight: 800;
    line-height: 176px;
`

const StyledSvg = styled.svg`
    position: absolute;
    bottom: 16%;
    left: 50%;
    transform: translateX(-50%);
    margin-left: -30px;
    
    textPath {
        font-size: 20px;
        font-weight: 700;
    }
`

const StyledImage = styled.div`
    position: absolute;
    top: 130px;
    right: 0;
    transform: rotate(7deg);
    width: 570px;
    height: 570px;

    &::after {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 570px;
        height: 570px;
        background-color: #E7E7E7;
        transform: rotate(-15deg);
        content: '';
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`