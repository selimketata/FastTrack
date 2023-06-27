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
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import productCurvyLines from './Assets/productCurvyLines.png';
import { motion } from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from "react-i18next";
import Modal2 from "../Form/Bouton"

const useStyles = makeStyles({
    flexGrow: {
        flex: '1',
    },
    button: {
        backgroundColor: '#3c52b2',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#E23E57',
        },
    }
})

const tiers = [
    {
        title: <Trans i18nKey="Packs1Title">trans</Trans>,
        description: [
            <Trans i18nKey="Packs1Body">trans</Trans>,
        ],
        buttonText: <Trans i18nKey="PacksButton">trans</Trans>,
        buttonVariant: 'contained',
    },
    {
        title: <Trans i18nKey="Packs2Title">trans</Trans>,
        subheader: <Trans i18nKey="Packs2Title2">trans</Trans>,
        description: [
            <Trans i18nKey="Packs2Body">trans</Trans>,
        ],
        buttonText: <Trans i18nKey="PacksButton">trans</Trans>,
        buttonVariant: 'contained',
    }
];



export default function Packs() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Box
                component="section"
                sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#325054' }}
            >
                <Container sx={{ mt: 1, mb: 2, display: 'flex', position: 'relative' }}>
                    <Box
                        component="img"
                        src={productCurvyLines}
                        alt="curvy lines"
                        sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
                    />
                    <Container>
                        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="#EEEEEE"
                                gutterBottom
                                sx={{ fontWeight: 'bold' }}
                            >
                                <Trans i18nKey="PacksTitle">trans</Trans>
                            </Typography>
                        </Container>
                        <Container maxWidth="md" component="main">
                            <Grid container spacing={15} alignItems="flex-end">
                                {tiers.map((tier) => (
                                    <Grid
                                        item
                                        key={tier.title}
                                        xs={12}
                                        sm={tier.title === 'Enterprise' ? 12 : 6}
                                        md={6}
                                    >
                                        <motion.div whileHover={{ scale: 1.1 }}>
                                            <Card>
                                                <CardHeader
                                                    title={tier.title}
                                                    subheader={tier.subheader}
                                                    titleTypographyProps={{ align: 'center' }}
                                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                                    subheaderTypographyProps={{
                                                        align: 'center',
                                                    }}
                                                    sx={{
                                                        backgroundColor: (theme) =>
                                                            theme.palette.mode === 'light'
                                                                ? theme.palette.grey[200]
                                                                : theme.palette.grey[700],
                                                    }}
                                                />
                                                <CardContent>
                                                    <ul>
                                                        {tier.description.map((line) => (
                                                            <Typography
                                                                component="li"
                                                                variant="subtitle1"
                                                                align="center"
                                                                key={line}
                                                                sx={{ fontSize: 13 }}
                                                            >
                                                                {line}
                                                            </Typography>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                                <CardActions>

                                                    {/*<Button fullWidth variant={tier.buttonVariant} className={classes.button}>
                                                        {tier.buttonText}
                                                        </Button>*/}
                                                        <Grid container justify="center">
                                                            <Grid item xs={2}>

                                                            </Grid>
                                                            <Grid item xs={8}>
                                                            <Modal2/>
                                                                </Grid>
                                                                <Grid item xs={2}>

                                                            </Grid>
                                                    </Grid>
                                                        
                                                </CardActions>
                                            </Card>
                                        </motion.div>
                                        <Box
                                            sx={{
                                                pt: 7,
                                                pb: 0,
                                            }}
                                        ></Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Container>
                </Container>
            </Box>
        </React.Fragment >
    );
}