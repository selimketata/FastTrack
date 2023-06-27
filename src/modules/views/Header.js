import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import color_crop from './color_crop.png';
import { Trans } from "react-i18next";

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@material-ui/core/Slide'
import Modal from "../../pages/Form/Modal"
import Lang from "../../pages/Lang/Lang"

function HideOnScroll(props) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction={'down'} in={!trigger}>
            <div>Hello</div>
        </Slide>
    );
}


export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="relative">
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
                    <Modal />
                    <Button color="inherit"><Trans i18nKey="Con">trans</Trans></Button>
                    <Lang />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
