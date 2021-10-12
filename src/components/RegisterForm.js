import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useForm from '../utils/useForm'

import styled from 'styled-components'
import { ContactsOutlined } from '@material-ui/icons'

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
    `

const RegisterButton = styled.button`
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

const RegisterForm = () => {

    const [usersData, setUsersData] = useState(null)
    const [checkEmail, setCheckEmail] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:3000/users`)
            .then(response => setUsersData(response?.data?.map((user) => user.email)))
            .catch(error => console.log(error))
    }, [])

    console.log(usersData, 'usersData')

    const registerClick = () => {

        if (checkEmail === true) {
            alert('Podany adres email jest zajęty!')
        } else if (checkEmail === false) {
            (axios.post('http://localhost:3000/users', {
                fname: values.fname,
                surname: values.surname,
                email: values.email,
                password: values.password,
            })
                .then(response => console.log(response))
                .catch(error => console.log(error)))
        }
    }

    const [values, handleChange] = useForm(registerClick)

    useEffect(() => {
        const checkEmailFlag = usersData?.includes(values.email)

        console.log(checkEmailFlag, 'flag')

        if (checkEmailFlag === true) {
            setCheckEmail(true)
        } else if (checkEmailFlag === false) {
            setCheckEmail(false)
        }
    }, [values.email])

    console.log(values.email, 'email')

    return (
        <Container>
            <Registration onSubmit={registerClick}>
                <Input
                    type='text'
                    placeholder='Imię'
                    value={values.fname}
                    onChange={handleChange}
                    name='fname'
                />
                <Input
                    type='text'
                    placeholder='Nazwisko'
                    value={values.surname}
                    onChange={handleChange}
                    name='surname'
                />
                <Input
                    type='email'
                    placeholder='Email'
                    value={values.email}
                    onChange={handleChange}
                    name='email'
                />
                <Input
                    type='password'
                    placeholder='Hasło'
                    value={values.password}
                    onChange={handleChange}
                    name='password'
                />

                <RegisterButton type='submit'>Zarejestruj się</RegisterButton>
            </Registration>
        </Container >)
}

export default RegisterForm