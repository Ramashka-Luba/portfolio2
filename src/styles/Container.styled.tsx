import styled from "styled-components";
import {theme} from "./Theme";

type ContainerPropsType = {
    display?: string
    direction?: string
    justify?: string
    align?: string
    maxWidth?: string
    marginInline?: string
    paddingBlock?: string
    wrap?: string
    gap?: string
}

export const Container = styled.div<ContainerPropsType>`
    display: flex;
    padding-inline: 20px;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'space-between'};
    align-items: ${props => props.align || 'center'};
    gap: ${props => props.gap};
    flex-wrap: ${props => props.wrap};
    max-width: ${props => props.maxWidth || '1080px'};
    margin-inline: ${props => props.marginInline || 'auto'};
    padding-block: ${props => props.paddingBlock || '100px 150px'};

    @media ${theme.media.tablet} {
        padding-block: ${props => props.paddingBlock || '50px 70px'};
    }
`