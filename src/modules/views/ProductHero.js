import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from './wallpaper.jpg';
import White from "./white.png"

import { motion } from "framer-motion";
import { Trans } from "react-i18next";


/*const backgroundImage =
  './wallpaper.jpg';*/

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      {/*<Typography color="inherit" align="center" variant="h2" marked="center">
        Always By Your Side
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
    </Typography>*/}
      <Button
        color="blue"
        variant="contained"
        size="large"
        component="a"
        href="https://fasttrack.tn/fasttrack#/signin"
        sx={{ minWidth: 200 }}
      >
        <Trans i18nKey="Con">trans</Trans>
      </Button>
      {/*<Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Sign In
  </Typography>*/}
    </ProductHeroLayout>
  );
}
