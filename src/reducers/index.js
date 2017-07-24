import { combineReducers } from "redux";

import counter from "./counter.reducer";
import todo from "./todo.reducer";

export default combineReducers({
  counter,
  todo
});