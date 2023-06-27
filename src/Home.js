import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import Header from './modules/views/Header';
import About from './pages/About/About';
import Packs from './pages/Packs/Packs';
import Products from './modules/views/Products';
//import Email from './pages/Email';
import Contact from './pages/Contact/Contact';
import withRoot from './modules/withRoot';
import Values from "./pages/Values/Values"
import Slider from "./pages/Slider/Slider"
//import AppFooter from './pages/Footer/Foo.js';
import ProductHero2 from './modules/views/ProductHero2';


function Index() {
  return (
    <React.Fragment>
      {/*<AppAppBar />*/}
      <Header />
      <ProductHero />
      <About />
      {/*<ProductValues />*/}
      {/*<ProductCTA />*/}
      <Values />
      <Packs />
      <Products />
      {/*<ProductCategories />*/}
      {/*<ProductHowItWorks />*/}
      {/*<ProductSmokingHero />*/}
      {/*<Contact />*/}
      <Slider />
      <ProductHero2 />
    </React.Fragment>
  );
}

export default withRoot(Index);
