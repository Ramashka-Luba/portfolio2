import React from 'react';
import {SkillsItem} from "../../components/SkillsItem";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../styles/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container
                maxWidth={'1375px'}
                justify={'center'}
                wrap={'wrap'}
                gap={'60px 20px'}
            >
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
            </Container>
        </StyledSkills>
    );
};

const StyledSkills =styled.section `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
`