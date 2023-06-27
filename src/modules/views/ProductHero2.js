import * as React from 'react';
import ProductHeroLayout2 from './ProductHeroLayout2';
import { Trans } from "react-i18next";
import Test from "./AppFooter";
import Street from '../../pages/Footer/Street.jpg'
import banner from '../../pages/Footer/banner.png'
import Box from '@mui/material/Box';

export default function ProductHero2() {
  return (
    <ProductHeroLayout2
      sxBackground={{
        backgroundImage: `url(${banner})`,
        backgroundColor: '#4f8f98',
        backgroundPosition: 'center',
      }}
    >
        <Box
                  sx={{
                      pt: 12,
                      pb: 5,
                  }}
              ></Box>
      <img
        style={{ display: 'none' }}
        src={banner}
        alt="increase priority"
      />
      
      <Test/>
    </ProductHeroLayout2>
  );
}
