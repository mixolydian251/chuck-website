import React from 'react';
import Header from './Header';
import About from './About';
import Quote from './Quote';
import PremiumPitch from './PremiumPitch';

export default () => (
  <div className="body">
    <Header />
    <Quote />
    <About />
    <PremiumPitch />
  </div>
);
