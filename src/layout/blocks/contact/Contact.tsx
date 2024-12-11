import React from 'react';
import styled from "styled-components";
import {Button} from "../../components/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <StyledTitle>Get In Touch</StyledTitle>
            <StyledForm>
                <Field placeholder={'name'}/>
                <Field placeholder={'email'}/>
                <Field placeholder={'message'} as={'textarea'}/>
                <Button buttontText={'SENT MESSAGE'} type={'submit'}/>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    padding-block: 80px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    outline: 1px solid red;
`

const StyledTitle = styled.h2`

`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Field = styled.input`
    height: 50px;
`