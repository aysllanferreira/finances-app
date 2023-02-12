import React from 'react';
import './Home.scss';

import {
  // Benefits,
  // Contact,
  // Examples,
  // Features,
  // Footer,
  Hero,
  Navbar,
  // Pricing,
  // Testimonial,
} from '../components';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
