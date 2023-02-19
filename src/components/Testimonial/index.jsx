import React, { useState } from 'react';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';
import testimonials from '../../constants/testimonials';
import './Testimonial.scss';

function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState('next');

  const handleNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    setDirection('next');
  };

  const handlePrevious = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    setDirection('prev');
  };
  return (
    <div className="Testimonial" id="testimonial">
      <div className="Testimonial__content">
        <h1 className="Testimonial__content__title">Testimonials</h1>
        <div className="Englobation">
          <button
            type="button"
            className="Testimonial__content__caroulsel__button"
            onClick={handlePrevious}
          >
            <GrCaretPrevious />
          </button>
          <div className={`Testimonial__content__caroulsel ${direction === 'next' ? 'goNext' : 'goPrev'}`}>
            {testimonials.map((testimonial, index) => (
              <div
                className={`Testimonial__content__caroulsel__item slide ${
                  index === current ? 'current ' : ''
                }${current === 0 && index === testimonials.length - 1 ? 'previous ' : ''}${
                  current === testimonials.length - 1 && index === 0 ? 'next ' : ''
                }${current > index ? 'previous ' : ''}${current < index ? 'next' : ''}`}
                key={testimonial.name}
              >
                <div className="Testimonial__content__caroulsel__item__content">
                  <img
                    src={testimonial.img}
                    alt="Testimonial"
                    className="Testimonial__content__caroulsel__item__content__image"
                  />
                  <h2 className="Testimonial__content__caroulsel__item__content__name">
                    <span>{testimonial.name}</span>
                  </h2>

                  <p className="Testimonial__content__caroulsel__item__content__position">{testimonial.position}</p>

                  <p className="Testimonial__content__caroulsel__item__content__description">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="Testimonial__content__caroulsel__button"
            onClick={handleNext}
          >
            <GrCaretNext />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
