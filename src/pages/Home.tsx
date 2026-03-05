import React from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Services from '../components/Services';
import Products from '../components/Products';
import Pricing from '../components/Pricing';
import About from '../components/About';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Pricing />
      <About />
      <Products />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
