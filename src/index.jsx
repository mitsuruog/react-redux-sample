import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

import CounterContainer from "./components/counter.container";
import TodoListContainer from "./components/todoList.container";

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Hello, world!!!</h1>
          <CounterContainer />
          <TodoListContainer />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);