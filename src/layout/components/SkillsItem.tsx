import React from 'react';
import styled from "styled-components";
import {font} from "../../styles/Common";

type SkillItemPropsType = {
    num: string,
    title?: string,
    text?: string
}

export const SkillsItem = (props: SkillItemPropsType) => {
    return (
        <StyledSkillsItem>
            <StyledSkillsSpan>{props.num}</StyledSkillsSpan>
            <StyledSkillsTitle>{props.title}</StyledSkillsTitle>
            <StyledSkillsText>{props.text}</StyledSkillsText>
        </StyledSkillsItem>
    );
};

const StyledSkillsItem = styled.li`
    display: grid;
    max-width: 430px;
    grid-template-columns: min-content 1fr;
    grid-template-rows: min-content max-content;
    gap: 0.3rem 1rem;
`

const StyledSkillsSpan = styled.span`
    grid-row: span 2;
    ${font({weight: 100, Fmax: 70, Fmin: 45})};
`

const StyledSkillsTitle = styled.h3`
    ${font({weight: 300, Fmax: 30, Fmin: 25})};
`

const StyledSkillsText = styled.p`
    font-size: 18px;
    font-weight: 200;
    line-height: 22px;
    ${font({weight: 200, Fmax: 18, Fmin: 14})};
`