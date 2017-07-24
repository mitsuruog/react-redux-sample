import { ADD_TODO, TOGGLE_TODO } from "../types";
import TodoModel from "../models/todo.model";

let nextTodoId = 0;

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        new TodoModel({
          id: nextTodoId++,
          text: action.text,
          completed: false,
        })
      ];
    case TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          item.completed = !item.completed;
        }
        return item;
      });
    default:
      return state;
  }
}