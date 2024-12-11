import React from 'react';
import {SkillsItem} from "../../components/SkillsItem";
import styled from "styled-components";
import {Container} from "../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <StyledSkillsList>
                <SkillsItem
                    num={'01.'}
                    title={'React'}
                    text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}
                />
                <SkillsItem
                    num={'02.'}
                    title={'Styled Components'}
                    text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}
                />
                <SkillsItem
                    num={'03.'}
                    title={'Figma'}
                    text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}
                />
                <SkillsItem
                    num={'04.'}
                    title={'HTML'}
                    text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}
                />
                <SkillsItem
                    num={'05.'}
                    title={'CSS'}
                    text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}
                />
                <SkillsItem
                    num={'06.'}
                    title={'Design'}
                    text={'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'}
                />
            </StyledSkillsList>
        </StyledSkills>
    );
};

const StyledSkills =styled.section `
    padding: 100px 52px 145px;
    background-color: #131212;
    color: #fff;
`
const StyledSkillsList =styled.ul `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px 10px;
    list-style: none;
    max-width: 1335px;
    margin-inline: auto;
`