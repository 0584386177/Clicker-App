import React, { useState } from "react";
import Clicker from "./Clicker"
import "./styles.css";
const ClickerWrapper = () => {
  const [clickerValue, setClickerValue] = useState(0);

  const handleClickerDecrease = () => {
    setClickerValue(clickerValue - 1);
  };

  const handleClickerReset = () => {
    setClickerValue(0);

  };
  const handleClickerIncrease = () => {
   setClickerValue(clickerValue +1);

  };
  return (
    <div className="ClickerWrapper">
      <h1 className="clicker-title">CLICKER</h1>
      <Clicker
        handleClickerDecrease={() => handleClickerDecrease()}
        handleClickerReset={() => handleClickerReset()}
        handleClickerIncrease={ () => handleClickerIncrease()}
        value={clickerValue}
      />
    </div>
  );
};

export default ClickerWrapper;
