import React from 'react';
import styled from 'styled-components';

type ProjectItemPropsType = {
    title:string
    subtitleLight:string
    subtitle:string
    desc:string
    link:string
}

export const ProjectItem = (props: ProjectItemPropsType) => {
    return (
        <StyledProjectItem>
            <h3>{props.title}</h3>
            <StyledProjectItemWrap>
                <div><span>{props.subtitleLight}</span>{props.subtitle}</div>
                <div>
                    <div>{props.desc}</div>
                    <a href={props.link} target="_blank" rel="noreferrer">View More</a>
                </div>
            </StyledProjectItemWrap>
        </StyledProjectItem>
    );
};

const StyledProjectItem = styled.li`
    outline: 1px solid red;
`

const StyledProjectItemWrap = styled.div`
    display: flex;
    gap:80px;

`