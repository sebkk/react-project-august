import React from 'react'
import { useForm } from 'react-hook-form'

import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`
const Registration = styled.form`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    margin: 10px;
    width: 80%;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 7px;
    border: 0;
    text-transform: uppercase;
`

const RegisterButton = styled.button`
    margin: 10px;
    width: 60%;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 7px;
    border: 0px solid #C8B590;
    text-transform: uppercase;

    :hover {
        background-color: #C8B590;
    }
`

const RegisterForm = () => {


    return (
        <Container>
            <Registration onSubmit>
                <Input type='text' placeholder='Imię'></Input>
                <Input type='text' placeholder='Nazwisko'></Input>
                <Input type='email' placeholder='Email'></Input>
                <Input type='password' placeholder='Hasło'></Input>

                <RegisterButton type='submit'>Zarejestruj się</RegisterButton>
            </Registration>
        </Container >)
}

export default RegisterForm