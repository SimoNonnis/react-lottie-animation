import React from "react";
import Lottie from "react-lottie";

import animationDrink from "../animations/animationDrink.json";

const Drink = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationDrink,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return <Lottie options={options} />;
};

export default Drink;
