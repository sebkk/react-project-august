import React from 'react';
import styled from 'styled-components'

import CharactersCard from './CharactersCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
`

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const CardsList = ({ characters, selectedStatus, alphabeticalOrder }) => {

    const alphabeticalSort = () => {
        if (alphabeticalOrder === true) {
            characters.results.sort((a, b) => a.name.localeCompare(b.name))
        } else if (alphabeticalOrder === false) {
            characters.results.sort((a, b) => b.name.localeCompare(a.name))
        }
    }

    return (
        <Container>
            <List>
                {
                    characters.results
                        .filter(item => {
                            if (selectedStatus === 'Dead') {
                                return item.status === 'Dead'
                            } else if (selectedStatus === 'unknown') {
                                return item.status === 'unknown'
                            } else if (selectedStatus === 'Alive') {
                                return item.status === 'Alive'
                            } else {
                                return true
                            }
                        })
                        .map(({ id, name, species, image, status }, index) =>
                            <CharactersCard key={name, id} name={name} species={species} image={image} index={index} status={status} />)
                        .sort(alphabeticalSort)
                }
            </List>
        </Container>
    )

}

export default CardsList