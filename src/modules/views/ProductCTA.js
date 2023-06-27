import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import Value1 from '../../assets/value.jpg'

function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container component="section" sx={{ mt: 10, display: 'flex' }}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: '#325054',
                py: 8,
                px: 3,
              }}
            >
              <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
                <Typography variant="h2" component="h2" gutterBottom color='white'>
                  Customer Satisfaction
                </Typography>
                <Typography variant="p" color='white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.
                </Typography>
                {/*<TextField
                noBorder
                placeholder="Your email"
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                Keep me updated
          </Button>*/}
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
        <Snackbar
          open={open}
          closeFunc={handleClose}
          message="We will send you our best offers, once a week."
        />
      </Container>
      <Container component="section" sx={{ mt: 5, display: 'flex' }}>
      </Container>
    </>
  );
}

export default ProductCTA;
