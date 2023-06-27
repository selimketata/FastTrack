import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import wallpaper from '../../assets/wallpaper.jpg'
import Header from "../Header/Header"

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${wallpaper})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
        </div>
    );
}