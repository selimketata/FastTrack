import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../modules/components/Typography';
import Value1 from './Assets/value.jpg'
import { Trans } from "react-i18next";

function Service() {
    const [open, setOpen] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Container component="section" sx={{ mt: 10, display: 'flex' }}>
                <Grid container>
                    <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                bgcolor: '#00ADB5',
                                py: 8,
                                px: 3,
                            }}
                        >
                            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
                                <Typography variant="h3" component="h3" gutterBottom color='white'>
                                    <Trans i18nKey="ServiceTitle">trans</Trans>
                                </Typography>
                                <Typography variant="p" color='white'>
                                <Trans i18nKey="ServiceBody">trans</Trans>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: -67,
                                left: -67,
                                right: 0,
                                bottom: 0,
                                width: '100%',
                                background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
                            }}
                        />
                        <Box
                            component="img"
                            src={Value1}
                            alt="call to action"
                            sx={{
                                position: 'absolute',
                                top: -28,
                                left: -28,
                                right: 0,
                                bottom: 0,
                                width: '100%',
                                maxWidth: 600,
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
            <Container component="section" sx={{ mt: 5, display: 'flex' }}>
            </Container>
        </div>
    );
}

export default Service;
