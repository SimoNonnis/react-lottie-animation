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
  const [stopped, setStopped] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleStart = () => {
    setStopped(false);
    setCompleted(false);
  };
  const handleAnimationComplete = () => {
    setCompleted(true);
    setStopped(true);
  };

  return (
    <div>
      <Lottie
        options={options}
        height="80%"
        width="80%"
        isStopped={stopped}
        eventListeners={[
          {
            eventName: 'complete',
            callback: handleAnimationComplete
          }
        ]}
      />

      {!completed ? (
        <p>Running...</p>
      ) : (
        <button className="button" onClick={handleStart}>
          Restart
        </button>
      )}
    </div>
  );
};

export default Drink;
