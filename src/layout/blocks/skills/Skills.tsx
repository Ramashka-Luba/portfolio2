import React from 'react';
import {SkillsItem} from "../../components/SkillsItem";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../styles/Container.styled";

type SkillItemPropsType = {
    num: string,
    title?: string,
    text?: string
}

export const Skills = (props: { skillItems: SkillItemPropsType[] }) => {
    return (
        <StyledSkills>
            <Container
                maxWidth={'1375px'}
                justify={'center'}
                wrap={'wrap'}
                gap={'60px 20px'}>
                {props.skillItems.map((skills, i) => {
                    return (
                        <SkillsItem
                            key={i}
                            num={skills.num}
                            title={skills.title}
                            text={skills.text}
                        />
                    )
                })}
            </Container>
        </StyledSkills>
    );
};

const StyledSkills =styled.section `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
`