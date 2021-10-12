import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { useHistory } from "react-router";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`
const Login = styled.form`
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
`

const LoginButton = styled.button`
    cursor: pointer;
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

const LoginForm = () => {

    let history = useHistory();

    const [usersData, setUsersData] = useState({})
    const [passwordValue, setPasswordValue] = useState('')
    const [emailValue, setEmailValue] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3000/users`)
            .then(response => setUsersData(response.data))
            .catch(error => console.log(error))
    }, [])

    // console.log(emailValue, 'valuesEmails', passwordValue, 'valuesPassword')

    const handleClick = () => {

        usersData.map((usersInfo) => {
            console.log(usersInfo.email, 'email mapa', usersInfo.password, 'password mapa')
            if (emailValue === usersInfo.email && passwordValue === usersInfo.password) {
                return history.push(`/success-login`)
            }

            if (emailValue !== usersInfo.email || passwordValue !== usersInfo.password) {
                return console.log('Podane dane są nieprawidłowe!')
            }
        })
    }

    return (
        <Container>
            <Login onSubmit={handleClick}>
                <Input
                    onChange={e => setEmailValue(e.target.value)}
                    type='email'
                    placeholder='Email'></Input>
                <Input
                    onChange={e => setPasswordValue(e.target.value)}
                    type='password'
                    placeholder='Hasło'></Input>

                <LoginButton type='submit'>Zaloguj się</LoginButton>
            </Login>
        </Container >)
}

export default LoginForm