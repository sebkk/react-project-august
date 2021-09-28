import React from "react";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: #393F60;
    box-sizing: border-box;
    padding: 15px;
`;

const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
`

const Paragraph = styled.p`
    margin: 3px;
    font-size: 12px;
`

const Image = styled.img`
    text-align: center;
    border-radius: 7px;
    width: 100px;
    height: 100px;
`

function CharacterPage({ name, id, image, species, status, gender }) {

    return (
        <>
            <Container>
                <Image src={image} alt={name} />
                <div>
                    <Title>{name}</Title>
                    <Paragraph>{species}, {status}, {gender}</Paragraph>
                </div>
            </Container>
        </>
    )
}

export default CharacterPage