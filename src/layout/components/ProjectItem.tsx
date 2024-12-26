import React from 'react';
import styled from 'styled-components';
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";
// import {Project1} from "../../../assets/images/Project1.jpg"


type ProjectItemPropsType = {
    title:string
    subtitle:string
    span: string
    desc:string
    link:string
    urlImg?: string
}

export const ProjectItem = (props: ProjectItemPropsType) => {
    return (
        <StyledProjectItem urlImg={props.urlImg}>
            <StyledProjectItemTitle>{props.title}</StyledProjectItemTitle>
            <StyledProjectItemWrap>
                <StyledProjectSubtitle>
                    {props.subtitle}
                    <StyledProjectSpan>{props.span}</StyledProjectSpan>
                </StyledProjectSubtitle>

                <StyledProjectDescWrap>
                    <StyledProjectDesc>{props.desc}</StyledProjectDesc>
                    <StyledProjectLink href={props.link} target="_blank" rel="noreferrer">View More</StyledProjectLink>
                </StyledProjectDescWrap>
            </StyledProjectItemWrap>
        </StyledProjectItem>
    );
};

export const StyledProjectItem = styled.li<{ urlImg: string | undefined }>`
    padding: 80px 45px 100px;
    outline: 1px solid red;
    background-image: url(${(props) => props.urlImg || ''});


    @media ${theme.media.tablet} {
        padding: 62px 45px 80px;
        flex: 0 0 calc(100vw - 20px);
        scloll-snap-align: center;
    }

    @media ${theme.media.mobile} {
        padding: 40px 20px 60px;
    }
`

const StyledProjectItemTitle = styled.h3`
    margin-bottom: 16px;
    ${font({weight: 600, Fmax: 24, Fmin: 15})};
`

const StyledProjectItemWrap = styled.div`
    //display: flex;
    //flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;

    @media ${theme.media.tablet} {
        grid-template-columns: 1fr;
    }
`

const StyledProjectSubtitle = styled.h4`
    //max-width: 420px;
    ${font({weight: 200, Fmax: 54, Fmin: 43})};
`

const StyledProjectSpan = styled.span`
    display: block;
    font-weight: 800;
`

const StyledProjectDescWrap = styled.div`
    // max-width: 430px;
    //
        // @media ${theme.media.tablet} {
    //     max-width: 300px;
    // }
`

const StyledProjectDesc = styled.p`
    ${font({weight: 400, Fmax: 18, Fmin: 15})};
`

const StyledProjectLink = styled.a`
    display: inline-block;
    position: relative;
    margin-top: 40px;
    padding: 8px 20px 8px 0;
    
    &:after {
        position: absolute;
        right: 0;
        content: '→';
    }
`