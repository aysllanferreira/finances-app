import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

function Card({
  title, price, desc, btnColour, btnTextColour, condition1, condition2,
  condition3, condition4, condition5,
}) {
  return (
    <div className="Pricing__card">
      <h1 className="Pricing__card__title">
        {title}
      </h1>
      <div className="Pricing__card__price">
        {price}
      </div>
      <div className="Pricing__card__desc">
        {desc}
      </div>
      <ul className="Pricing__card__list">
        <li className="Pricing__card__list__item">
          {condition1 ? <AiOutlineCheck /> : <AiOutlineClose />}
          <span>More than 160 currencies</span>
        </li>
        <li className="Pricing__card__list__item">
          {condition2 ? <AiOutlineCheck /> : <AiOutlineClose />}
          <span>Real-time stock market</span>
        </li>
        <li className="Pricing__card__list__item">
          {condition3 ? <AiOutlineCheck /> : <AiOutlineClose />}
          <span>Export to Excel, pdf, csv or xml</span>
        </li>
        <li className="Pricing__card__list__item">
          {condition4 ? <AiOutlineCheck /> : <AiOutlineClose />}
          <span>Full detailed report</span>
        </li>
        <li className="Pricing__card__list__item">
          {condition5 ? <AiOutlineCheck /> : <AiOutlineClose />}
          <span>Support 24hs</span>
        </li>
      </ul>
      <button
        type="button"
        className="Pricing__card__button"
        style={{ backgroundColor: btnColour, color: btnTextColour }}
      >
        Get Started
      </button>
    </div>
  );
}

Card.defaultProps = {
  btnColour: '#fff',
  btnTextColour: '#000',
  condition1: true,
  condition2: true,
  condition3: true,
  condition4: true,
  condition5: true,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  btnColour: PropTypes.string,
  btnTextColour: PropTypes.string,
  condition1: PropTypes.bool,
  condition2: PropTypes.bool,
  condition3: PropTypes.bool,
  condition4: PropTypes.bool,
  condition5: PropTypes.bool,
};

export default Card;
