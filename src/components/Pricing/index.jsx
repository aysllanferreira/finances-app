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
          desc="Get started with our free plan and experience the essentials."
          condition3={false}
          condition4={false}
          condition5={false}
        />

        <Card
          title="Standard"
          price="$15.00/Month"
          desc="Upgrade to our standard plan for advanced features and capabilities."
          condition4={false}
          condition5={false}
        />

        <Card
          title="Premium"
          price="$25.00/Month"
          desc="Unlock the full potential with our premium plan exclusive benefits."
        />
      </div>
    </div>
  );
}

export default Pricing;
