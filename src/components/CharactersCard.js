import React from 'react';
import styled from 'styled-components'

const List = styled.div`
`

const Card = styled.div`
border: 1px solid black;
    margin: 10px 10px 10px 10px;
    box-sizing: border-box;
    width: 103px;
    height: 185px;
`

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
    width: 100px;
    height: 100px;
`

const CharactersCard = ({ name, image, species, index, status }) => {

    return (
        <List>
            <Card data-name={name}>
                <Image src={image} alt={name} />
                <div className='container'>
                    <Title>{name}</Title>
                    <Paragraph index={index}>{species}, {status}</Paragraph>
                </div>
            </Card>
        </List>
    )

}

export default CharactersCard