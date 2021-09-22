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

    return (
        <Container>
            <List>
                {
                    characters.results
                        .filter(item => {
                            if (selectedStatus === 'Alive') {
                                return item.status === 'Alive'
                            } else if (selectedStatus === 'Dead') {
                                return item.status === 'Dead'
                            } else if (selectedStatus === 'unknown') {
                                return item.status === 'unknown'
                            } else if (selectedStatus === 'All') {
                                return true
                            }
                        })
                        .map(({ id, name, species, image, status }, index) =>
                            <CharactersCard key={name, id} name={name} species={species} image={image} index={index} status={status} />)
                        .sort((a, b) => {
                            if (alphabeticalOrder === true) {
                                return a.name.localeCompare(b.name)
                            }
                        })
                }

            </List>
        </Container>
    )

}

export default CardsList