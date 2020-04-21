import React, { useState } from 'react';
import Lottie from 'react-lottie';

import animationDrink from '../animations/animationDrink.json';

const options = {
  loop: false,
  autoplay: true,
  animationData: animationDrink,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Drink = () => {
  const [paused, setPaused] = useState(false);

  const handlePause = () => setPaused(!paused);
  const handleAnimationComplete = () => console.log('the animation completed:');
  return (
    <div>
      <Lottie
        options={options}
        height="80%"
        width="80%"
        isPaused={paused}
        eventListeners={[
          {
            eventName: 'complete',
            callback: handleAnimationComplete
          }
        ]}
      />

      <button className="button" onClick={handlePause}>
        {paused ? 'Play' : 'Pause'}
      </button>
    </div>
  );
};

export default Drink;
