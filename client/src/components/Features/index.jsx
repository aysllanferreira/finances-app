import React from 'react';
import './Features.scss';
import featuresCards from '../../constants/features';

function Features() {
  return (
    <div className="Features container" id="features">
      <div className="Features__title">
        <h1>Features</h1>
        <h3>In one place, manage all your expenses and put your financial life on track!</h3>
      </div>

      <div className="Features__cards">
        {featuresCards.map(({ icon, title, content }) => (
          <div className="Features__cards__card">
            <div className="Features__cards__card__icon">{icon}</div>

            <div className="Features__cards__card__title">
              <h3>{title}</h3>
            </div>

            <div className="Features__cards__card__content">
              <p>{content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
