import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Switch } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';

import CardsList from '../components/CardsList';
import axios from 'axios';

const Container = styled.div`
    padding-top: 40px;
    height: 100vh;
    background-color: #555868;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

let page = 1

const CharactersList = () => {
    const [characters, setCharacters] = useState(null)

    function downloadData() {
        let params = `?page=${page}`

        if (characters.results.status) {
            params += `&status=${characters.filters.status}`
        }
    }

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(response => setCharacters(response.data))
    }, [])

    if (!characters) {
        return (
            <div>
                Brak danych z backendu
            </div>
        )
    }

    const prevPage = () => {
        if (characters.info.prev === null) {
            alert('To pierwsza strona!')
            return
        }

        page--

    }

    const nextPage = () => {
        if (characters.info.next === null) {
            alert(`To ostatnia strona!`)
            return
        }

        page++
    }

    return (
        <Container>
            <Head> Lista Postaci </Head>
            <PagesButtons>
                <Button onClick={prevPage} style={{ margin: 5 }} variant="contained">Poprzednia</Button>
                <Button style={{ margin: 5 }} variant="contained">{page}</Button>
                <Button onClick={nextPage} style={{ margin: 5 }} variant="contained">Następna</Button>
            </PagesButtons>

            <FiltersBlock>
                <Filters>
                    <option selected value='All'>All</option>
                    <option value='Alive'>Alive</option>
                    <option value='Dead'>Dead</option>
                    <option value='Others'>Others</option>
                </Filters>

                <FormControlLabel control={<Switch defaultChecked />} label="A-Z" />
            </FiltersBlock>

            <CardsBlock>
                <CardsList characters={characters} setCharacters={setCharacters} page={page} />
            </CardsBlock>
        </Container>
    )
}

export default CharactersList