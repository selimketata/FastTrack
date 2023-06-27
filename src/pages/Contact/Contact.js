import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import emailjs from "emailjs-com";
import EmailIcon from '@mui/icons-material/Email';
import Select from './Select'
import { makeStyles } from '@material-ui/core/styles';

const theme = createTheme();


const useStyles = makeStyles({
    button: {
        //backgroundColor: '#E23E57',
        //color: '#ffffff',
        '&:hover': {
            backgroundColor: '#EEEEEE',
            color: '#222831',
        },
    }
})

export default function Contact() {
    const classes = useStyles()
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_5a2xktm", "template_04mwvxh", e.target, "nnocjnM7Wa2tfl5h-")
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                {/*<CssBaseline />*/}
                <Box
                    sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/*<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <EmailIcon />
                </Avatar>*/}
                    {/*<Typography component="h1" variant="h5" >
                        Product Request
            </Typography>*/}
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Full Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label="Phone Number"
                            name="phone"
                            autoComplete="phone"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Select />
                        {/*<TextField
                            margin="normal"
                            required
                            fullWidth
                            id="subject"
                            label="Subject"
                            name="subject"
                            autoComplete="subject"
                            autoFocus
            />*/}
                        {/*<TextField
                            margin="normal"
                            required
                            fullWidth
                            id="message"
                            label="Message"
                            name="message"
                            autoComplete="message"
                            autoFocus
        />*/}
                        {/*<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                type="submit"
                                //fullWidth
                                variant="contained"
                                style={{
                                    backgroundColor: '#E23E57',
                                    color: '#ffffff',
                                    '&:hover': {
                                        backgroundColor: '#EEEEEE',
                                        color: '#222831',
                                    },
                                }}
                                sx={{ mt: 3, mb: 2 }}
                                className={classes.button}
                            >
                                Send
                            </Button>
                            </div>*/}

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}