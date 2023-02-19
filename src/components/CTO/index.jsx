import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './CTO.scss';

function CTO() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="CTO">
      <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce
        delay={100}
      >
        <div className="CTO__img">
          <div className="CTO__content">
            <AnimationOnScroll
              animateIn="animate__fadeInDown"
              animateOnce
              delay={100}
            >
              <h2 className="CTO__content__title">
                To become a
                {' '}
                <span>successful</span>
                {' '}
                person, you must first have
                {' '}
                <span>control</span>
                {' '}
                of your
                {' '}
                <span>financial life</span>
                ,
                and then take
                {' '}
                <span>decisions</span>
                {' '}
                for bigger steps.
                <br />
                {' '}
                This is
                {' '}
                <span>crucial</span>
                .
              </h2>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOnce
              delay={200}
            >
              <button
                type="button"
                onClick={() => scrollTo('pricing')}
              >
                Get Started
              </button>
            </AnimationOnScroll>
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
}

export default CTO;
