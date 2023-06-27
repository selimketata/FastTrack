import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Money from "./Money"
import Service from "./Service"
import Productivity from "./Productivity"
import Protections from "./Protections"
import { Trans } from "react-i18next";

const theme = createTheme();

export default function Values() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        pt: 7,
                        pb: 0,
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: 'bold' }}
                        style={{ color: "#393E46" }}
                    >
                        <Trans i18nKey="Values">trans</Trans>
                    </Typography>
                </Box>

            </ThemeProvider>
            <Money />
            <Service />
            <Productivity />
            <Protections />
            <Box
                sx={{
                    pt: 7,
                    pb: 0,
                }}
            ></Box>
        </div>
    );
}