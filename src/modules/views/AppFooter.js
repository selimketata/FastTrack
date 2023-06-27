import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Facebook from './okok3.png'
import Twitter from './linked.png'
import Logo from "./white.png"
import { Trans } from "react-i18next";
import wallpaper from '../../assets/wallpaper.jpg'
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  typo: {
    flexGrow: 1,
    textAlign: "center"
  }
}));

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <div>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <Typography variant="h5"  gutterBottom color="#ffffff" className={classes.typo}>
          <img
                    src={Logo}
                    alt="Facebook"
                    width="190" height="190"
                  />
            </Typography>
          </Grid>
          <Grid item xs={6}>

          </Grid>

        </Grid>
        
          
        </Grid>
        <Grid item xs={4}>
        <Typography variant="h3" marked="left" gutterBottom color="#ffffff" className={classes.typo}>
              <Trans i18nKey="Email">trans</Trans>
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.1 }}>
                <Typography variant="h5"  gutterBottom color="#ffffff" className={classes.typo}>
                <Trans i18nKey="Emaill">trans</Trans>: Contact@fasttrack.tn
            </Typography>
            <br/>
            <Typography variant="h5"  gutterBottom color="#ffffff" className={classes.typo}>
            <Trans i18nKey="Tell">trans</Trans>: 29 384 900/28 478 900 
            </Typography>
              </Box>
            </Box>
        </Grid>
        <Grid item xs={4}>
        <Typography variant="h3" marked="left" gutterBottom color="#ffffff" className={classes.typo}>
              <Trans i18nKey="Slogan">trans</Trans>
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.1 }}>
              
            <Typography variant="h3" marked="left" gutterBottom color="#ffffff" className={classes.typo}>
            <Grid container spacing={1}>
              <Grid xs={3.5}>

              </Grid>
              <Grid item xs={5}>

              <img
                    src={Facebook}
                    alt="Facebook"
                    width="100"
                  />
              </Grid>
              <Grid xs={2}>

</Grid>
            
            </Grid>            
            </Typography>
            
              </Box>
            </Box>
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={4}>
        <Typography variant="h5"  gutterBottom color="#ffffff" className={classes.typo}>
          © FastTrack 2022
            </Typography>
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
      </Grid>
    </Box>

    {/*<Typography
      component="footer"
      sx={{ display: 'flex' }}
    >
      <Container sx={{ my: 10, display: 'flex' }}>
      
        <Grid container spacing={30}>
          <Grid item xs={5} sm={3} md={2}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 200 }}
            >
              <img
                    src={Logo}
                    alt="Facebook"
                    width="150" height="150"
                  />
         
            </Grid>
          </Grid>
          <Grid item xs={9} sm={7} md={5}>
            <Typography variant="h3" marked="left" gutterBottom color="#ffffff" className={classes.typo}>
              <Trans i18nKey="Email">trans</Trans>
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.1 }}>
                <Typography variant="h5"  gutterBottom color="#ffffff" className={classes.typo}>
                <Trans i18nKey="Emaill">trans</Trans>: Contact@fasttrack.tn
            </Typography>
            <br/>
            <Typography variant="h5"  gutterBottom color="#ffffff" className={classes.typo}>
            <Trans i18nKey="Tell">trans</Trans>: 29 384 900 /  28 478 900 
            </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8} sm={6} md={4}>
            <Typography variant="h3" marked="left" gutterBottom color="#ffffff" className={classes.typo}>
              <Trans i18nKey="Slogan">trans</Trans>
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.1 }}>
              
            <Typography variant="h3" marked="left" gutterBottom color="#ffffff" className={classes.typo}>
            <img
                    src={Facebook}
                    alt="Facebook"
                    width="50" height="50"
                  />
                  <img
                    src={Twitter}
                    alt="Facebook"
                    width="50" height="50"
                  />
            </Typography>
            
              </Box>
            </Box>
          </Grid>
          <Typography variant="h5"  gutterBottom color="#ffffff" className={classes.typo}>
          © FastTrack 2022
            </Typography>
        </Grid>
        
      </Container>
      
  </Typography>*/}
    </div>
  );
}
