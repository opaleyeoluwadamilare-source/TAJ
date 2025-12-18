import React from 'react';
import { Hero } from '../components/Hero';
import { HeroCarousel } from '../components/HeroCarousel';
import { RecognitionCarousel } from '../components/RecognitionCarousel';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <HeroCarousel />
      <RecognitionCarousel />
    </>
  );
};
