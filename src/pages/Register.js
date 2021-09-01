import React from 'react';
import styled from 'styled-components';

import RegisterForm from '../components/RegisterForm';

const Container = styled.div`
    height: 100vh;
    background-color: #555868;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`

const Register = () => {
    return (
        <Container>
            <RegisterForm />
        </Container>
    )
}

export default Register