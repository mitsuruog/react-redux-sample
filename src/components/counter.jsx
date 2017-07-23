import React from "react";
import PropTypes from "prop-types"

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <div>{value}</div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter;