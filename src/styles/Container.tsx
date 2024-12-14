import styled from "styled-components";

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
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'space-between'};
    align-items: ${props => props.align || 'center'};
    gap: ${props => props.gap};
    flex-wrap: ${props => props.wrap};
    max-width: ${props => props.maxWidth || '1040px'};
    margin-inline: ${props => props.marginInline || 'auto'};
    padding-block: ${props => props.paddingBlock || '100px 150px'};

    outline: 1px solid red;
`