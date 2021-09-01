import React from 'react';
import styled from 'styled-components';

import MakeTimer from '../components/MakeTimer';

const Container = styled.div`
    height: 100vh;
    background-color: #555868;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`

const Timer = () => {
    return (
        <Container>
            <MakeTimer />
        </Container>
    )
}

export default Timer