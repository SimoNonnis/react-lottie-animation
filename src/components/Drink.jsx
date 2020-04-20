import React from 'react';
import Lottie from 'react-lottie';

import animationDrink from '../animations/animationDrink.json';

const options = {
  loop: true,
  autoplay: true,
  animationData: animationDrink,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Drink = () => {
  return <Lottie options={options} height={300} width={300} />;
};

export default Drink;
