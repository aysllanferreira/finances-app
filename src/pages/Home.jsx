import React from 'react';
import './Home.scss';

import {
  // Contact,
  Features,
  // Footer,
  Hero,
  Navbar,
  Pricing,
  Testimonial,
  CTO,
} from '../components';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Features />
      <CTO />
      <Pricing />
      <Testimonial />
    </div>
  );
}

export default Home;
