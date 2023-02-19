import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './Hero.scss';

function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <div className="Hero" id="home" />
      <div className="Hero_Content">
        <AnimationOnScroll
          animateIn="animate__fadeInDown"
          animateOnce
          delay={100}
        >
          <h1 className="Hero_Content__title">Finance Star</h1>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn="animate__lightSpeedInLeft"
          animateOnce
          delay={200}
        >
          <h2 className="Hero_Content__subtitle">Control your financial life in one place.</h2>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn="animate__zoomInUp"
          animateOnce
          delay={300}
        >
          <button type="button" className="Hero_Content__button" onClick={() => scrollTo('pricing')}>
            Get Started
          </button>
        </AnimationOnScroll>
      </div>
    </div>
  );
}

export default Hero;
