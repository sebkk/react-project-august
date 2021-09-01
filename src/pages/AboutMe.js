import React from 'react';
import styled from 'styled-components';
import MyInfo from '../components/MyInfo';

const Container = styled.div`
    height: 100vh;
    background-color: #555868;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AboutMe = () => {
    return (
        <Container>
            <MyInfo />
        </Container>
    )
}

export default AboutMe