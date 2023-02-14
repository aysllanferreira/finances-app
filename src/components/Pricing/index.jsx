import React from 'react';
import Card from './components/Card';
import './Pricing.scss';

function Pricing() {
  return (
    <div>
      <h1 className="titler">Pricing</h1>
      <div id="pricing" className="Pricing container">
        <Card
          title="Basic"
          price="FREE"
          desc="Free for life"
          btnColour="#fff"
          btnTextColour="#000"
          condition3={false}
          condition4={false}
          condition5={false}
        />

        <Card
          title="Standard"
          price="$15.00/Month"
          desc="Free for life"
          btnColour="#fff"
          btnTextColour="#000"
          condition4={false}
          condition5={false}
        />

        <Card
          title="Premium"
          price="$25.00/Month"
          desc="Free for life"
          btnColour="#fff"
          btnTextColour="#000"
        />
      </div>
    </div>
  );
}

export default Pricing;
