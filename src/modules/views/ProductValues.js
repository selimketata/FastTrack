import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import productCurvyLines from './productCurvyLines.png';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 10, mb: 15, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src={productCurvyLines}
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />

        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/*<Box
                component="img"
                src="/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
                sx={{ height: 55 }}
  />*/}
              <DirectionsCarIcon sx={{ color: '#ffffff', fontSize: 50 }} />
              <Typography variant="h6" sx={{ my: 5 }} color='#ffffff'>
                Company Value 1
              </Typography>
              <Typography variant="p" color='#ffffff'>
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.                  '
                }

                {
                  /*', go for a mini-vacation just a few subway stops away from your home.'*/
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/*<Box
                component="img"
                src="/static/themes/onepirate/productValues2.svg"
                alt="graph"
                sx={{ height: 55 }}
              />*/}
              <LocationOnIcon sx={{ color: '#ffffff', fontSize: 50 }} />
              <Typography variant="h6" sx={{ my: 5 }} color='#ffffff'>
                Company Value 2
              </Typography>
              <Typography variant="p" color='#ffffff'>
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis.                  '
                }

                {/*'your Sundays will not be alike.'*/}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/*<Box
                component="img"
                src="/static/themes/onepirate/productValues3.svg"
                alt="clock"
                sx={{ height: 55 }}
              />*/}
              <AttachMoneyIcon sx={{ color: '#ffffff', fontSize: 50 }} />
              <Typography variant="h6" sx={{ my: 5 }} color='#ffffff'>
                Company Value 3
              </Typography>
              <Typography variant="p" color='#ffffff'>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. '}
                {/*'that you will not find anywhere else.'*/}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
