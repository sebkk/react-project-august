import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Switch } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import axios from 'axios';

import CardsList from '../components/CardsList';

const Container = styled.div`
    margin-top: 40px;
    padding: 30px 10px 20px 10px;
    min-height: 100vh;
    height: auto;
    background-color: #555868;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const Head = styled.h2`
    color: white;
    margin-top: 0;
`

const PagesButtons = styled.div`
    display: flex;
    justify-content: center;
`

const CardsBlock = styled.div`
    display: flex;
`

const Filters = styled.select`
    margin: 4px 10px 10px 0;
    box-sizing: border-box;
    padding: 7px;
    border-radius: 7px;
`

const FiltersBlock = styled.div`
    display: flex;
`

const CharactersList = () => {
    const [characters, setCharacters] = useState(null)
    const [page, setPage] = useState(1)
    const [selectedStatus, setSelectedStatus] = useState(null)
    const [alphabeticalOrder, setAlphabeticalOrder] = useState(null)

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(response => setCharacters(response.data))
            .catch(error => console.log(error))
    }, [page])

    const prevPage = () => {
        if (characters.info.prev === null) {
            alert('To pierwsza strona!')
            return

        }

        setPage(page - 1)

    }

    const nextPage = () => {
        if (characters.info.next === null) {
            alert(`To ostatnia strona!`)
            return
        }

        setPage(page + 1)
    }

    const firstPage = () => {
        setPage(1)
    }

    if (!characters) {
        return (
            <div>
                Brak danych z backendu
            </div>
        )
    }

    return (
        <Container>
            <Head> LISTA POSTACI {page}/{characters.info.pages}</Head>
            <PagesButtons>
                <Button onClick={prevPage} style={{ margin: 5 }} variant="contained">Poprzednia</Button>
                <Button onClick={firstPage} style={{ margin: 5 }} variant="contained">Pierwsza</Button>
                <Button onClick={nextPage} style={{ margin: 5 }} variant="contained">Następna</Button>
            </PagesButtons>

            <FiltersBlock>
                <Filters onChange={(e) => setSelectedStatus(e.target.value)}>
                    <option value='All'>All</option>
                    <option value='Alive'>Alive</option>
                    <option value='Dead'>Dead</option>
                    <option value='unknown'>Others</option>
                </Filters>

                <FormControlLabel control={<Switch onChange={(e) => setAlphabeticalOrder(e.target.checked)} />} label="A-Z" />
            </FiltersBlock>

            <CardsBlock>
                <CardsList characters={characters} selectedStatus={selectedStatus} alphabeticalOrder={alphabeticalOrder} setCharacters={setCharacters} page={page} />
            </CardsBlock>
        </Container>
    )
}

export default CharactersList