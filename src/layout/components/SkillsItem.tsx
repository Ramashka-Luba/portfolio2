import React from 'react';
import styled from "styled-components";

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
    font-size: 70px;
    font-weight: 100;
    line-height: 72px;
`

const StyledSkillsTitle = styled.h3`
    font-size: 30px;
    font-weight: 300;
    line-height: 32px;
`

const StyledSkillsText = styled.p`
    font-size: 18px;
    font-weight: 200;
    line-height: 22px;
`