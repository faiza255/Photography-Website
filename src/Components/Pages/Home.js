import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { CustomCursor } from '../CustomCursor/Index'
import Gallery from '../Gallery/Gallery'
// import ClientsTestiomonial from '../ClientsTestiomonial';

function Home() {
  return (
    <>
<CustomCursor />

      <HeroSection />
      <Gallery />
      <Cards />
      {/* <ClientsTestiomonial /> */}
      <Footer />

    </>
  );
}

export default Home;