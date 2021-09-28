import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const List = styled.div`
`

const Card = styled.div`
    background: #C8B590;
    border-radius: 8px;
    margin: 10px 10px 10px 10px;
    box-sizing: border-box;
    padding-bottom: 5px;
    text-align: center;
    width: 103px;
    height: auto;
    box-shadow: 3px 3px 10px black;
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
    text-align: center;
    border-radius: 7px;
    width: 100px;
    height: 100px;
`


const CharactersCard = ({ name, id, image, species, gender, index, status }) => {

    return (
        <List>
            <Card data-name={name} >
                <Link to={`/characters-list/${name}/${id}`} style={{ textDecoration: 'none' }} key={name, id} name={name} id={id} species={species} image={image} gender={gender} status={status} >
                    <Image src={image} alt={name} />
                    <div>
                        <Title>{name}</Title>
                        <Paragraph index={index}>{species}, {status}</Paragraph>
                    </div>
                </Link>
            </Card>
        </List>
    )

}

export default CharactersCard