import React from 'react';
import {ProjectItem} from "../../components/ProjectItem";
import styled from "styled-components";
import {Container} from "../../../styles/Container.styled";

export const Project = () => {
    return (
        <section>
            <Container
                direction={'column'}
                gap={'70px'}
            >
                <StyledProjectTitle>MY PROJECTS</StyledProjectTitle>
                    <ProjectItem
                        title={'Mental Health'}
                        subtitle={'A Case Study_'}
                        span={'Find Peace in Meditation'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
                        link={'#'}
                    />
                    <ProjectItem
                        title={'Fashion Show'}
                        subtitle={'A Case Study_'}
                        span={'Enjoy Fashion Shows From Home'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
                        link={'#'}
                    />
                    <ProjectItem
                        title={'Barbeque'}
                        subtitle={'Branding_'}
                        span={'Chicken Barbeque Never Goes Wrong'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
                        link={'#'}
                    />
            </Container>
        </section>
    );
};

const StyledProjectTitle =styled.h2`
    max-width: 700px;
    font-size: 120px;
    font-weight: 800;
    line-height: 122px;
`
