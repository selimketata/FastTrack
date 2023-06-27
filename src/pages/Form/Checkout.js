import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { Trans } from "react-i18next";

const steps = [<Trans i18nKey="FormQuestion1Title">trans</Trans>, <Trans i18nKey="FormQuestion2Title">trans</Trans>, <Trans i18nKey="FormQuestion3Title">trans</Trans>];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

const theme = createTheme();

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                {/*<Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>*/}
                    <Typography component="h1" variant="h4" align="center" style={{ color: "#ffffff" }}>
                    <Trans i18nKey="FormTitle">trans</Trans>
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}
                            sx={{
                                '& .MuiStepLabel-root .Mui-completed': {
                                  color: '#e23e57', // circle color (COMPLETED)
                                },
                                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                                  {
                                    color: '#e23e57', // Just text label (COMPLETED)
                                  },
                                '& .MuiStepLabel-root .Mui-active': {
                                  color: '#e23e57', // circle color (ACTIVE)
                                },
                                '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                                  {
                                    color: '#e23e57', // Just text label (ACTIVE)
                                  },
                                '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                                  fill: '#ffffff', // circle's number (ACTIVE)
                                },
                              }}
                            >
                                <StepLabel><Typography style={{ color: "#ffffff" }}>{label}</Typography></StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom style={{ color: "#ffffff" }}>
                                    <Trans i18nKey="FormDoneTitle">trans</Trans>
                                </Typography>
                                <Typography variant="subtitle1" style={{ color: "#ffffff" }}>
                                    <Trans i18nKey="FormDoneBody">trans</Trans>
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }} 
                                        style={{
                                            color: "#ffffff",
                                        }}>
                                            <Trans i18nKey="Back">trans</Trans>
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 3, ml: 1 }}
                                        style={{
                                            color: "#ffffff",
                                            //borderRadius: 35,
                                            backgroundColor: "#e23e57",
                                            //padding: "18px 36px",
                                            //fontSize: "15px"
                                        }}
                                    >
                                        {activeStep === steps.length - 1 ? <Trans i18nKey="Send">trans</Trans> : <Trans i18nKey="Continue">trans</Trans>}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                {/*</Paper>*/}
            </Container>
        </ThemeProvider>
    );
}