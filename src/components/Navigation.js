import React from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import PropTypes from 'prop-types';

const Navi = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #C8B590;
    width: 100%;
    height: 60px;
`;

const Icon = styled.div`
    margin-left: 15px;
`;

const NaviButtons = styled.div`
    margin-right: 10px;
    justify-content: space-evenly;

`;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        // marginRight: theme.spacing(5),
    },
}));

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        // target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,

    // window: PropTypes.func,
};

function Navigation({ ...props }) {
    const classes = useStyles();
    const history = useHistory()

    return (
        <div className={classes.root}>
            <ElevationScroll {...props}>
                <AppBar >
                    <Toolbar disableGutters='false' variant='dense'>
                        <Navi>
                            <Icon>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                    <AccessibleForwardIcon fontSize='large' onClick={() => history.push("/")} />
                                </IconButton>
                            </Icon>
                            <NaviButtons>
                                <Button color="inherit" onClick={() => history.push("/about-me")}>O mnie</Button>
                                <Button color="inherit" onClick={() => history.push("/timer")}>Stoper</Button>
                                <Button color="inherit" onClick={() => history.push("/counter")}>Licznik</Button>
                                <Button color="inherit" onClick={() => history.push("/characters-list")}>Lista postaci</Button>
                                <Button color="inherit" onClick={() => history.push("/register")}>Rejestracja</Button>
                                <Button color="inherit" onClick={() => history.push("/login")}>Logowanie</Button>
                            </NaviButtons>
                        </Navi>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </div>
    )
}

export default Navigation