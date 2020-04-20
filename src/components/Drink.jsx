import React, { useState } from 'react';
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
  const [paused, setPaused] = useState(false);

  const handlePause = () => setPaused(!paused);

  return (
    <div>
      <Lottie options={options} height={300} width={300} isPaused={paused} />
      <button onClick={handlePause}>{paused ? 'Play' : 'Pause'}</button>
    </div>
  );
};

export default Drink;
