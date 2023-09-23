import React from "react";

const Clicker = (props) => {
  const { value,handleClickerDecrease,handleClickerReset,handleClickerIncrease } = props;
  return (
    <div className="clicker">
      <div className="clicker-infor">{value}</div>
      <div className="clicker-features">
        <button onClick={handleClickerDecrease} className="clicker-decrease">-</button>
        <button onClick={handleClickerReset} className="clicker-reset"><i class="fa-solid fa-rotate-right"></i></button>
        <button onClick = {handleClickerIncrease}className="clicker-increase">+</button>
      </div>
    </div>
  );
};

export default Clicker;
