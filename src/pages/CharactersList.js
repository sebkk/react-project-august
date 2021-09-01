import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CardsList from '../components/CardsList';

const Container = styled.div`
    height: 100vh;
    background-color: #555868;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CharactersList = () => {
    const [characters, setCharacters] = useState(null)

    let data = ''

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data = setCharacters(data))
    }, [])

    if (!characters) {
        return (
            <div>
                Brak danych z backendu
            </div>
        )
    }

    return (
        <Container>
            <CardsList characters={characters} />
        </Container>
    )
}

export default CharactersList