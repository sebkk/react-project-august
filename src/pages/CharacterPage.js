import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Button from '@material-ui/core/Button';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #555868;
    box-sizing: border-box;
    padding-top: 90px;
`;

const Title = styled.div`
    margin-top: 5px;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
`

const Paragraph = styled.p`
    margin: 4px;
    font-size: 15px;
`

const Image = styled.img`
    text-align: center;
    border-radius: 7px;
    width: 200px;
    height: 200px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    color: white;
    text-align: center;
`

const Line = styled.div`
    width: 10%;
`

function CharacterPage({ item }) {

    let history = useHistory();

    const handleClick = () => {
        history.push('/characters-list')
    }

    return (
        <>
            <Container>

                <Line>
                    <Button onClick={handleClick} style={{ margin: 5 }} variant="contained">Wróć</Button>
                </Line>

                <Card>
                    <Image src={item.image} alt={item.name} />
                    <div>
                        <Title>{item.name}</Title>
                        <Paragraph>SPECIES: {item.species}</Paragraph>
                        <Paragraph>STATUS: {item.status}</Paragraph>
                        <Paragraph>GENDER: {item.gender}</Paragraph>
                    </div>
                </Card>
            </Container>
        </>
    )
}

export default CharacterPage