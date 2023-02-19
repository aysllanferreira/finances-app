/* eslint-disable no-nested-ternary */
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './Features.scss';
import featuresCards from '../../constants/features';

function Features() {
  return (
    <section className="Features container" id="features">
      <div className="Features__title">
        <AnimationOnScroll
          animateIn="animate__flipInY"
          animateOut="animate__flipOutY"
          animateOnce
          delay={100}
        >
          <h1>Features</h1>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOnce
          delay={200}
        >
          <h3>In one place, manage all your expenses and put your financial life on track!</h3>
        </AnimationOnScroll>
      </div>

      <div className="Features__cards">
        {featuresCards.map(({ icon, title, content }, index) => (
          <AnimationOnScroll
            animateOnce
            delay={100}
            animateIn={index === 0 ? 'animate__fadeInLeft'
              : index === 1 ? 'animate__fadeInUp'
                : index === 2 ? 'animate__fadeInDown'
                  : 'animate__fadeInRight'}
          >
            <div className="Features__cards__card">
              <div className="Features__cards__card__icon">{icon}</div>
              <h3 className="Features__cards__card__title title">{title}</h3>
              <p className="Features__cards__card__content">{content}</p>
            </div>
          </AnimationOnScroll>
        ))}
      </div>
    </section>
  );
}

export default Features;
