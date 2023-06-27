/*import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import color_crop from '../../modules/views/color_crop.png';


import { Link } from 'react-router-dom'

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Box component="img" sx={{ height: 40 }} alt="Your logo." src={color_crop} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Fast Track
                    </Typography>
                    {/*<Button color="inherit">About</Button>
                    <Button color="inherit">Contact</Button>
                    <Button color="inherit">Cart</Button>
    <Button color="inherit">Sign In</Button>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}*/

/*import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { Sort as SortIcon, ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { Link as Scroll } from 'react-scroll';
import white from '../../assets/white.png';
import white_crop from '../../assets/white_crop.png';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
    },
    toolbar: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText: {
        color: '#5AFF3D',
    },
    container: {
        textAlign: 'center',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
    },
    logo: {
        height: '50px'
    },
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <img
                        src={white_crop}
                        height='30px'
                    />
                    <h1 className={classes.appbarTitle}>
                        Fast<span className={classes.colorText}>Track</span>
                    </h1>

                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
}*/

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: 'none',
    },
    button: {
        backgroundColor: '#3c52b2',
        color: '#fff',
        '&:hover': {
            backgroundColor: 'primary',
            color: '#3c52b2',
        },
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar>
                <Typography>
                    FastTrack
                </Typography>
                <Button color="inherit" className={classes.button}>Home</Button>
                <Button color="inherit">Packs</Button>
                <Button color="inherit">Products</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Conatct</Button>
            </Toolbar>
        </AppBar>
    );
}