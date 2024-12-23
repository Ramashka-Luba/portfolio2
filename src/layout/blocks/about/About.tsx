import React from 'react';
import Photo from '../../../assets/images/photo.jpg'
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../styles/Container";
// import {Button} from "../../components/Button.styled";
// import CVLUBA from "../../../documents/CVLUBA"

export const About = () => {
    return (
        <StyledAbout>
            <Container
                justify={'center'}
                align={'start'}
                wrap={'wrap'}>

                <StyledWrap>
                    <StyledTitle>About Me</StyledTitle>
                    <StyledTextMain>I look at usual things with my unsual eyes.</StyledTextMain>
                    <StyledPhoto src={Photo} alt={'Photo1'}/>
                    {/*<Button secondary href={CVLUBA} download="CV LUBA">download cv</Button>*/}
                </StyledWrap>
                <StyledWrap>
                    <StyledText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                        Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta.
                        Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.
                    </StyledText>
                    <StyledPhoto src={Photo} alt={'Photo2'}/>
                </StyledWrap>
            </Container>
        </StyledAbout>

    );
};

const StyledAbout = styled.section`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    outline: 1px solid red;
`

const StyledWrap = styled.div`
    max-width: 500px;
`

const StyledTitle = styled.h2`
    font-size: 16px;
    font-weight: 900;
    line-height: 24px;
`

const StyledTextMain = styled.p`
    margin-top: 16px;
    font-size: 48px;
    font-weight: 200;
    line-height: 57px;
    text-transform: uppercase;
`

const StyledText = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
`

const StyledPhoto = styled.img`
    width: 450px;
    height: 489px;
    object-fit: cover;
    margin-top: 200px;
`

