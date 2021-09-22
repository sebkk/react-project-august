import React from 'react';
import styled from 'styled-components';
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../images/me.jpg";


const person = {
    photo: MyPhoto,
    personName: 'Sebastian',
    surname: 'Grabczak',
    details: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`

const Names = styled.p`
    font-size: 23px;
    text-transform: uppercase;
    margin-top: 5px;
    margin-bottom: 0;
`
const Info = styled.p`
    margin: 3px;

`

const MyInfo = (personName, surname, details, photo) => {

    return (
        <Wrapper>
            <ReactRoundedImage
                image={person.photo}
                roundedColor="#C8B590"
                imageWidth="230"
                imageHeight="230"
                roundedSize="7"
                hoverColor="#393F60"
            />
            <Names>{person.personName} {person.surname}</Names>
            <Info>{person.details}</Info>
        </Wrapper>
    )
}

export default MyInfo