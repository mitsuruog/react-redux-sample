import React from "react";
import { connect } from "react-redux";

import { ADD_TODO, TOGGLE_TODO } from "../types";
import TodoList from "./todoList";

const TodoListContainer = ({ todos, onClickTodo, onAddTodo }) => {

  let input;

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    onAddTodo(input.value.trim());
    input.value = "";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={(node) => {
          input = node;
        }} />
        <button
          type="submit"
          onClick={onAddTodo}
        >
          add
        </button>
      </form>
      <TodoList
        todos={todos}
        onClickTodo={onClickTodo}
      />
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    todos: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickTodo: () => dispatch({ type: TOGGLE_TODO }),
    onAddTodo: (value) => {
      dispatch({ type: ADD_TODO, text: value });
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListContainer);