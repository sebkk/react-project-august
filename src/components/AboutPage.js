import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import TimerIcon from '@material-ui/icons/Timer';
import FunctionsIcon from '@material-ui/icons/Functions';
import GroupIcon from '@material-ui/icons/Group';
import CreateIcon from '@material-ui/icons/Create';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';


const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: #393F60;
    box-sizing: border-box;
    padding: 15px;
`;

const Line = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 20px;
`;

const Block = styled.div`
    width: 20%;
    height: 30%;
    background-color: #393F60;
    box-shadow: 0 0 1em #0F121F;
    box-sizing: border-box;
    padding: 10px;
    color: white;
    border-radius: 5px;
    :hover {
        background-color: #555868;
    }
`

const Icon = styled.div`
    color: #C8B590;
`
const Title = styled.div`
    margin-bottom: 4px;
    font-weight: bold;
    text-transform: uppercase;
    color: #C8B590;
`
const Description = styled.div`
    font-size: 14px;
    color: white;
`

function AboutPage() {

    const descriptionText = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'

    return (
        <Container>
            <Line>
                <Block><Link to='/about-me' style={{ textDecoration: 'none' }}>
                    <Icon> <PermIdentityIcon fontSize='large' /> </Icon>
                    <Title>O mnie</Title>
                    <Description>{descriptionText}</Description>
                </Link></Block>

                <Block><Link to='/timer' style={{ textDecoration: 'none' }}>
                    <Icon> <TimerIcon fontSize='large' /> </Icon>
                    <Title>Stoper</Title>
                    <Description>{descriptionText}</Description>
                </Link></Block>

                <Block><Link to='/counter' style={{ textDecoration: 'none' }}>
                    <Icon> <FunctionsIcon fontSize='large' /> </Icon>
                    <Title>Licznik</Title>
                    <Description>{descriptionText}</Description>
                </Link></Block>
            </Line>

            <Line>
                <Block><Link to='/characters-list' style={{ textDecoration: 'none' }}>
                    <Icon> <GroupIcon fontSize='large' /> </Icon>
                    <Title>Lista postaci</Title>
                    <Description>{descriptionText}</Description>
                </Link></Block>

                <Block><Link to='/register' style={{ textDecoration: 'none' }}>
                    <Icon> <CreateIcon fontSize='large' /> </Icon>
                    <Title>Rejestracja</Title>
                    <Description>{descriptionText}</Description>
                </Link></Block>

                <Block><Link to='/login' style={{ textDecoration: 'none' }}>
                    <Icon> <MeetingRoomIcon fontSize='large' /> </Icon>
                    <Title>Logowanie</Title>
                    <Description>{descriptionText}</Description>
                </Link></Block>
            </Line>
        </Container>
    )
}

export default AboutPage