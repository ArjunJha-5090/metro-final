import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { FoodStalls } from '../components/FoodStalls';
import { Specialities } from '../components/Specialities';
import { Gallery } from '../components/Gallery';
import { Events } from '../components/Events';
import { Reviews } from '../components/Reviews';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Contact } from '../components/Contact';
import { FinalCTA } from '../components/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <FoodStalls />
      <Specialities />
      <Gallery />
      <Events />
      <Reviews />
      <WhyChooseUs />
      <Contact />
      <FinalCTA />
    </>
  );
};
