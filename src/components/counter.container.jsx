import React from "react";
import { connect } from "react-redux";

import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "../types";
import Counter from "./counter";

// dispatch利用バージョン。
// dispatchを隠蔽した方がいい気がする。
//const CounterContainer = ({ dispatch, value }) => {
//  return (
//    <Counter
//      value={value}
//      onIncrement={() => dispatch({ type: COUNTER_INCREMENT })}
//      onDecrement={() => dispatch({ type: COUNTER_DECREMENT })}
//    />
//  );
//};

const CounterContainer = ({ value, onIncrement, onDecrement }) => {
  return (
    <Counter
      value={value}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // このdispatch部分は、あとでactionCreatorに移動してもいい
    onIncrement: () => dispatch({ type: COUNTER_INCREMENT }),
    onDecrement: () => dispatch({ type: COUNTER_DECREMENT }),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);