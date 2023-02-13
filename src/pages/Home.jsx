import React from 'react';
import './Home.scss';

import {
  // Benefits,
  // Contact,
  Features,
  // Footer,
  Hero,
  Navbar,
  // Pricing,
  // Testimonial,
  CTO,
} from '../components';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Features />
      <CTO />
    </div>
  );
}

export default Home;
