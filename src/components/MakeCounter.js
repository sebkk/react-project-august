import React, { useState } from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
`

const ButtonsLine = styled.div`
    display: flex;
    margin-top: 7px;
`

const Number = styled.div`
    color: ${({ counter }) => (counter % 5 === 0 ? 'green' : 'white')};
`

const MakeCounter = () => {

    let number = 0

    const [counter, setCounter] = useState(number)

    const handleAddOne = () => {
        setCounter((counter) => counter + 1)
    }

    const handleReset = () => {
        setCounter((counter) => counter = 0)
    }

    const handleMinusOne = () => {
        setCounter((counter) => counter - 1)
    }

    return (
        <Container>
            <Number counter={counter}>
                {counter}
            </Number>

            <ButtonsLine>
                <Button onClick={handleMinusOne} style={{ margin: 5 }} variant="contained">-1</Button>
                <Button onClick={handleReset} style={{ margin: 5 }} variant="contained">Wyzeruj</Button>
                <Button onClick={handleAddOne} style={{ margin: 5 }} variant="contained">+1</Button>
            </ButtonsLine>
        </Container>
    )
}

export default MakeCounter