import React from 'react';
import styled from 'styled-components';

type ProjectItemPropsType = {
    title:string
    subtitle:string
    span: string
    desc:string
    link:string
}

export const ProjectItem = (props: ProjectItemPropsType) => {
    return (
        <StyledProjectItem>
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

const StyledProjectItem = styled.li`
    padding: 80px 45px 100px;
    outline: 1px solid red;
`

const StyledProjectItemTitle = styled.h3`
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
`

const StyledProjectItemWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:80px;
`

const StyledProjectSubtitle = styled.h4`
     font-size: 45px;
     font-weight: 200;
     line-height: 54px;
     max-width: 420px;
`

const StyledProjectSpan = styled.span`
    display: block;
    font-weight: 800;
`

const StyledProjectDescWrap = styled.div`
    max-width: 430px;
`

const StyledProjectDesc = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
`

const StyledProjectLink = styled.a`
    position: relative;
    margin-top: 40px;
    padding: 8px 20px 8px 0;
    
    &:after {
        position: absolute;
        right: 0;
        content: '→';
    }
`