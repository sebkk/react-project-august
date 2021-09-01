import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';


const Container = styled.div`
    height: 100vh;
    background-color: #555868;
`

const Login = () => {
    return (
        <Container>
            <LoginForm />
        </Container>
    )
}

export default Login