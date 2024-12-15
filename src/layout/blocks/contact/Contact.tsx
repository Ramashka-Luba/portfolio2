import React from 'react';
import styled from "styled-components";
import {Button} from "../../components/Button";
import {Container} from "../../../styles/Container";

export const Contact = () => {
    return (
        <section>
            <Container direction={'column'}
                       align={'center'}
                       gap={'20px'}
                       maxWidth={'540px'}
            >
                <StyledTitle>Get In Touch</StyledTitle>
                <StyledForm>
                    <Field placeholder={'name'}/>
                    <Field placeholder={'email'}/>
                    <Field placeholder={'message'} as={'textarea'}/>
                    <Button buttontText={'SENT MESSAGE'} type={'submit'}/>
                </StyledForm>
            </Container>
        </section>
    );
};


const StyledTitle = styled.h2`
    font-size: 45px;
    font-weight: 800;
    line-height: 54px;
`

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    textarea {
        height: 150px;
        resize: none;
    }
`

const Field = styled.input`
    width: 100%;
    padding: 7px 15px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    text-transform: capitalize;
`