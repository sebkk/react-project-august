import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


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

const CardsList = ({ characters }) => {



    return (
        <Container>
            <List>
                {
                    characters.results
                        // .filter((item, index) => index < 18)
                        .map(({ name, species, image, status }, index) =>
                            <CharactersCard key={name} name={name} species={species} image={image} index={index} status={status} />)
                }

            </List>
        </Container>
    )

}

export default CardsList