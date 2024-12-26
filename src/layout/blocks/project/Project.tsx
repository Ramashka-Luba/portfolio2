import React from 'react';
import {ProjectItem} from "../../components/ProjectItem";
import styled from "styled-components";
import {Container} from "../../../styles/Container.styled";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";


type ProjectItemPropsType = {
    title: string
    subtitle: string
    span: string
    desc: string
    link: string
    urlImg?: string
}

export const Project = (props: { projecItems: Array<ProjectItemPropsType> }) => {
    return (
        <section>
            <ContainerProject
                direction={'column'}
                gap={'70px'}
            >
                <StyledProjectTitle>MY <br/> PROJECTS</StyledProjectTitle>
                <StyledProjectList>
                    {props.projecItems.map((item, i) => {
                        return (
                            <ProjectItem
                                key={i}
                                title={item.title}
                                subtitle={item.subtitle}
                                span={item.span}
                                desc={item.desc}
                                link={item.link}
                                urlImg={item.urlImg}
                            />
                        )
                    })}
                </StyledProjectList>

            </ContainerProject>
        </section>
    );
};

const StyledProjectTitle =styled.h2`
    max-width: 700px;
    ${font({weight: 800, Fmax: 120, Fmin: 50})};
`

const ContainerProject = styled(Container)`

    @media ${theme.media.tablet} {
        gap: 40px;
        align-items: start;
    }
`

const StyledProjectList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 70px;

    @media ${theme.media.tablet} {
        flex-direction: row;
        gap: 10px;
        overflow: auto;
        overscroll-behavior-x: contain;
        scroll-snap-type: x mandatory;
    }
`
