import React from 'react';
import {ProjectItem} from "../../components/ProjectItem";
import styled from "styled-components";
import {Container} from "../../components/Container";

export const Project = () => {
    return (
        <StyledProject>
            <Container
                direction={'column'}
                paddingBlock={'100px 200px'}
            >
                <StyledProjectTitle>MY PROJECTS</StyledProjectTitle>
                <StyledProjectList>
                    <ProjectItem
                        title={'Mental Health'}
                        subtitleLight={'A Case Study_'}
                        subtitle={'Find Peace in Meditation'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
                        link={'#'}
                    />
                    <ProjectItem
                        title={'Fashion Show'}
                        subtitleLight={'A Case Study_'}
                        subtitle={'Enjoy Fashion Shows From Home'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
                        link={'#'}
                    />
                    <ProjectItem
                        title={'Barbeque'}
                        subtitleLight={'Branding_'}
                        subtitle={'Chicken Barbeque Never Goes Wrong'}
                        desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'}
                        link={'#'}
                    />
                </StyledProjectList>
            </Container>
        </StyledProject>
    );
};

const StyledProject =styled.section`
    //max-width: 1040px;
    //margin-inline: auto;
    //padding-block: 100px 200px;
`

const StyledProjectList =styled.ul`
    display: flex;
    flex-direction: column;
    gap: 80px;
    list-style: none;
    margin: 0;
    padding: 0;
`

const StyledProjectTitle =styled.h2`
    margin-bottom: 70px;
    max-width: 700px;
    font-size: 120px;
    font-weight: 800;
    line-height: 122px;
`
