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

export const Skills = (props: { skillItems: Array<SkillItemPropsType> }) => {
    return (
        <StyledSkills>
            <ContainerSkills
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
            </ContainerSkills>
        </StyledSkills>
    );
};

const StyledSkills =styled.section `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
`

const ContainerSkills = styled(Container)`

    @media ${theme.media.tablet} {
        gap: 20px 40px;
    }
`

