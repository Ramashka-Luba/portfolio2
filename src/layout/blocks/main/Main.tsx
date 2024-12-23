import React from 'react';
import styled from "styled-components";
import Photo from '../../../assets/images/photo.jpg'
import {Container} from "../../../styles/Container.styled";

export const Main = () => {
    return (
        <StyledMain>
            <Container
                maxWidth={'1200px'}
            >
                <StyleWrap>
                    <StyleTitle>HELLO I’M</StyleTitle>
                    <StyledSvg viewBox="0 0 200 200" width="600">
                        <defs>
                            <path id="testPath" d="M15,100a85,85 0 1,0 170,0a85,85 0 1,0 -170,0"></path>
                        </defs>
                        <use xlinkHref="#testPath" fill="none"></use>
                        <text dx="25" dy="10">
                            <textPath xlinkHref="#testPath">FRONTEND DEVELOPER</textPath>
                        </text>
                    </StyledSvg>
                </StyleWrap>

                <StyledImage>
                    <StyledPhoto src={Photo} alt={'Photo3'}/>
                </StyledImage>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    display: flex;
    align-items: center;
    height: calc(100vh - 85px);
    margin-top: 85px;
`

const StyleWrap = styled.div`
    position:relative;
    margin-bottom: 150px;
    z-index: 1;
    max-width: 610px;
`

const StyleTitle = styled.h1`
    font-size: 150px;
    font-weight: 800;
    line-height: 176px;
    text-align: center;
`

const StyledSvg = styled.svg`
    position: absolute;
    bottom: -50%;
    left: 50%;
    transform: translateX(-50%);
    
    textPath {
        font-size: 20px;
        font-weight: 700;
    }
`

const StyledImage = styled.div`
    position: relative;
    transform: rotate(7deg);

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
`

const StyledPhoto = styled.img`
    width: 570px;
    height: 570px;
    object-fit: cover;
`