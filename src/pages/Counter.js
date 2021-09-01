import React from 'react';
import styled from 'styled-components';

import MakeCounter from '../components/MakeCounter';

const Container = styled.div`
    height: 100vh;
    background-color: #555868;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`

const Counter = () => {
    return (
        <Container>
            <MakeCounter />
        </Container>
    )
}

export default Counter