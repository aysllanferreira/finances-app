import React from 'react';
import './CTO.scss';

function CTO() {
  return (
    <section className="CTO">
      <div className="CTO__img">
        <div className="CTO__content">
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
          <button type="button">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTO;
