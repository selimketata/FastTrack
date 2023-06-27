import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import productCurvyLines from './productCurvyLines.png';
import ReactPlayer from 'react-player'
import { Trans } from "react-i18next";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function About() {

    return (
        <ThemeProvider theme={theme}>
            <Box
                component="section"
                sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#EEEEEE' }}
            >
                <Container sx={{ mt: 7, mb: 4, display: 'flex', position: 'relative' }}>
                    <Box
                        component="img"
                        src={productCurvyLines}
                        alt="curvy lines"
                        sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
                    />
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h3"
                            align="center"
                            gutterBottom
                            sx={{ fontWeight: 'bold' }}
                            style={{ color: "#393E46" }}
                        >
                            <Trans i18nKey="Who">trans</Trans>
                        </Typography>
                        <Box
                            sx={{
                                pt: 2,
                                pb: 2,
                            }}
                        >
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            <Trans i18nKey="About">trans</Trans>
                            </Typography>
                        </Box>
                            <Container maxWidth="sm" sx={{ mt: 5, mb: 5, display: 'flex', position: 'relative' }}>
                                    <ReactPlayer url='https://youtu.be/Icbe4FnDIoU' />
                            </Container>
                    </Container>
                </Container>
            </Box>
        </ThemeProvider >
    );
}