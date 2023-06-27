import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from "framer-motion";
import Parc from "../../assets/parc(1).jpg"
import SOS from "../../assets/sos.jpg"
import RFID from "../../assets/rfid.jpg"
import { Trans } from "react-i18next";
import Modal2 from "../../pages/Form/Bouton"
import { makeStyles } from '@material-ui/core/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

const theme = createTheme();

export default function Products() {
    return (
        <ThemeProvider theme={theme}>
            <main>
                <Box
                    component="section"
                    sx={{ bgcolor: '#EEEEEE' }}
                >
                    <Box
                        sx={{
                            pt: 10,
                            pb: 0,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h3"
                                align="center"
                                color="text.primary"
                                gutterBottom
                                sx={{ fontWeight: 'bold' }}
                                style={{ color: "#393E46" }}
                            >
                                <Trans i18nKey="ProductsTitle">trans</Trans>
                            </Typography>

                        </Container>
                    </Box>
                    <Container sx={{ py: 7 }} maxWidth="md">
                        <Grid container spacing={4}>
                            {/*cards.map((card) => (*/}
                            <Grid item xs={12} sm={6} md={6}>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                // 16:9
                                                pt: '10%',
                                            }}
                                            image={Parc}
                                            alt="random"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                <Trans i18nKey="Products1Title">trans</Trans>
                                            </Typography>
                                            <Typography>
                                                <Trans i18nKey="Products1Body">trans</Trans>
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {/*<Button fullWidth
                                                style={{
                                                    backgroundColor: "#00ADB5",
                                                }}
                                            >
                                                Contacter
                                            </Button>    */}                                    </CardActions>
                                    </Card>
                                </motion.div >
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                // 16:9
                                                pt: '10%',
                                            }}
                                            image="https://parlonssciences.ca/sites/default/files/styles/width_800px/public/2021-12/gps_on_phone.jpg?itok=oCW2o0MN"
                                            alt="random"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                <Trans i18nKey="Products2Title">trans</Trans>
                                            </Typography>
                                            <Typography>
                                                <Trans i18nKey="Products2Body">trans</Trans>
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {/*<Button fullWidth
                                                style={{
                                                    backgroundColor: "#00ADB5",
                                                }}
                                            >
                                                Contacter
                                            </Button>*/}
                                            {/*<Grid container justify="center">
                                                            <Grid item xs={2}>

                                                            </Grid>
                                                            <Grid item xs={8}>
                                                            <Modal2/>
                                                                </Grid>
                                                                <Grid item xs={2}>

                                                            </Grid>
                                        </Grid>*/}
                                        </CardActions>
                                    </Card>
                                </motion.div >

                            </Grid>
                        </Grid>
                    </Container>
                    <Container sx={{ py: 1 }} maxWidth="md">
                        <Grid container spacing={4}>
                            {/*cards.map((card) => (*/}
                            <Grid item xs={12} sm={6} md={6}>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                // 16:9
                                                pt: '10%',
                                            }}
                                            image={SOS}
                                            alt="random"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                <Trans i18nKey="Products3Title">trans</Trans>
                                            </Typography>
                                            <Typography>
                                            <Trans i18nKey="Products3Body">trans</Trans>
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {/*<Button fullWidth
                                                style={{
                                                    backgroundColor: "#00ADB5",
                                                }}
                                            >
                                                Contacter
                                            </Button>    */}                                    </CardActions>
                                    </Card>
                                </motion.div >
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                // 16:9
                                                pt: '10%',
                                            }}
                                            image={RFID}
                                            alt="random"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                <Trans i18nKey="Products4Title">trans</Trans>
                                            </Typography>
                                            <Typography>
                                            <Trans i18nKey="Products4Body">trans</Trans>
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {/*<Button fullWidth
                                                style={{
                                                    backgroundColor: "#00ADB5",
                                                }}
                                            >
                                                Contacter
                                            </Button>*/}
                                        </CardActions>
                                    </Card>
                                </motion.div >
                                <Box
                                    sx={{
                                        pt: 10,
                                        pb: 0,
                                    }}

                                ></Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </main>
        </ThemeProvider>
    );
}