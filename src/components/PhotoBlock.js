import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import TextField from '@material-ui/core/TextField';




const Container = styled.div`
    background-color: #555868;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Text = styled.div`
    color: white;
    
`;

const Title = styled.h1`
    text-transform: uppercase;
    font-size: 50px;
    margin-bottom: 8px;
`;

const Description = styled.p`
    font-size: 15px;
    margin-top: 5px;
`;

const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    height: 54px;
`;

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    root: {
        '& > *': {
            margin: theme.spacing(0),
            width: '25ch',
        },
    },
}));


function PhotoBlock() {
    const classes = useStyles();

    return (

        <Container>
            <Text>
                <Title>Project React Sebastian</Title>
                <Description>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                </Description>
                <Search>

                    <TextField id="outlined-basic" size='small' placeholder='Wyszukiwarka' variant="outlined" margin='dense' />
                    <Button variant="contained" size="medium" className={classes.margin}>
                        <SearchSharpIcon />
                    </Button>
                </Search>
            </Text>
        </Container>

    )
}

export default PhotoBlock