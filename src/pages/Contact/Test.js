import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import productCurvyLines from '../../assets/productCurvyLines.png';

import Contact from './Contact'

const tiers = [
    {
        title: 'Light',
        price: '5',
        description: [
            '1 car included',
            'Help center access',
            'Email support',
        ],
        buttonText: 'Consult',
        buttonVariant: 'contained',
    },
    {
        title: 'Pro',
        subheader: 'Most popular',
        price: '15',
        description: [
            '10 cars included',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Consult',
        buttonVariant: 'contained',
    },
    {
        title: 'SMS',
        price: '30',
        description: [
            '100 cars included',
            'Help center access',
            'Phone & email support',
        ],
        buttonText: 'Consult',
        buttonVariant: 'contained',
    },
];


function PricingContent() {
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Box
                component="section"
                sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#eeeeee' }}
            >
                <Container sx={{ mt: 5, mb: 5, display: 'flex', position: 'relative' }}>
                    <Box
                        component="img"
                        src={productCurvyLines}
                        alt="curvy lines"
                        sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
                    />
                    <Container>
                        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                            <Contact />
                        </Container>
                    </Container>
                </Container>
            </Box>
        </React.Fragment >
    );
}

export default function Packs() {
    return <PricingContent />;
}