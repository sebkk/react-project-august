import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    background-color: ${({ theme, xxx }) => xxx === 'light' ? theme.light.mainColor : theme.dark.mainColor};
`

const Title = styled.div`
    font-size: 15px;
    text-align: center;
    color: palevioletred;
`

const Paragraph = styled.p`
    color: ${(props) => {
        console.log(props); return props.index % 2 ? 'blue' : 'red'
    }};
`

const EnhancedParagraph = styled(Paragraph)`

`

const CharactersCard = ({ name, image, species, index }) => {

    return (
        <Card data-name={name}>
            <img src={image} alt={name} />
            <div className='container'>
                <Title>{name}</Title>
                <Paragraph index={index}>{species}</Paragraph>
                <EnhancedParagraph index={index}>{species} </EnhancedParagraph>
            </div>
        </Card>
    )

}

export default CharactersCard