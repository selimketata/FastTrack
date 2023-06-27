import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Contact from "../Contact/Contact"
//import TextField from '@mui/material/TextField';
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { Trans } from "react-i18next";

const useStyles = makeStyles({
    input: {
      color: "white",
      
    },
    
  });

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& label': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
    },
  })(TextField);

export default function Review() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom style={{ color: "#ffffff" }}>
                <Trans i18nKey="FormQuestion3">trans</Trans>
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CssTextField  
                        required
                        //variant="outlined"
                        id="firstName"
                        name="firstName"
                        label= {<Trans i18nKey="FormQuestion3Choice1">trans</Trans>}
                        fullWidth
                        autoComplete="given-name"
                        inputProps={{ style: { color: 'white'}}}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CssTextField 
                        required
                        id="lastName"
                        name="lastName"
                        label={<Trans i18nKey="FormQuestion3Choice2">trans</Trans>}
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        inputProps={{ style: { color: 'white'}}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CssTextField 
                        required
                        id="address1"
                        name="address1"
                        label={<Trans i18nKey="FormQuestion3Choice3">trans</Trans>}
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        inputProps={{ style: { color: 'white'}}}
                    />
                </Grid>
            </Grid>
            {/*<List disablePadding>
                {products.map((product) => (
                    <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        $34.06
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>John Smith</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                        </Grid>
        </Grid> */}
        </React.Fragment >
    );
}