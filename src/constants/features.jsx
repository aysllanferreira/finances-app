import React from 'react';
import { BsCurrencyEuro, BsCurrencyDollar, BsCurrencyPound } from 'react-icons/bs';
import { HiOutlineChartSquareBar } from 'react-icons/hi';
import { AiOutlineCheckCircle, AiOutlineFundView } from 'react-icons/ai';

const featuresCards = [
  {
    icon: (
      <>
        <BsCurrencyEuro />
        {' '}
        <BsCurrencyDollar />
        {' '}
        <BsCurrencyPound />
      </>
    ),
    title: 'Multi-currency',
    content: 'It doesn\'t matter which currency you have investments in, in our application it is possible to manage and monitor in different types of currencies.',
  },
  {
    icon: <HiOutlineChartSquareBar />,
    title: 'Reports in charts',
    content: 'We generate different types of data with excellent graphics so that you can simply and objectively monitor whether your goals are up to the plan.',
  },
  {
    icon: <AiOutlineCheckCircle />,
    title: 'Track everything',
    content: 'Our tool was created so that you can keep track of all your finances, whether income, expenses and even stock market and cryptocurrencies.',
  },
  {
    icon: <AiOutlineFundView />,
    title: 'Make simulations',
    content: 'Create investment or cash flow simulations to create earnings plans. This tool also has excellent charts and data.',
  },
];

export default featuresCards;
