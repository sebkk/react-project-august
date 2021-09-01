import React, { useState, useRef } from 'react';
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

const MakeTimer = () => {
    let initialValue = 0
    let value = 1000

    const [timer, setTimer] = useState(initialValue)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, value)
    }


    const handleStop = () => {

        clearInterval(countRef.current)
        setIsPaused(false)

    }

    const handleReset = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }

    return (
        <Container>
            <div>
                {formatTime()}
            </div>
            <ButtonsLine>
                <Button onClick={handleStart} style={{ margin: 5 }} variant="contained">Start</Button>
                <Button onClick={handleReset} style={{ margin: 5 }} variant="contained">Wyzeruj</Button>
                <Button onClick={handleStop} style={{ margin: 5 }} variant="contained">Stop</Button>
            </ButtonsLine>
        </Container>
    )
}

export default MakeTimer