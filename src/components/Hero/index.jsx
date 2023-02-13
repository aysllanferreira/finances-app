import React from 'react';
import './Hero.scss';

function Hero() {
  return (
    <div>
      <div className="Hero" id="home" />
      <div className="Hero_Content">
        <h1 className="Hero_Content__title">Finance Star</h1>
        <h2 className="Hero_Content__subtitle">Control your financial life in one place.</h2>
        <button type="button" className="Hero_Content__button">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
