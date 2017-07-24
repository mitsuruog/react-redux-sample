import React from "react";
import PropTypes from "prop-types";

import Todo from "./todo";

const TodoList = ({ todos, onClickTodo }) => {
  return (
    <ul>
      {todos.map((item) => {
        return <Todo
          key={item.id}
          {...item}
          onClick={() => onClickTodo(item.id)}
        />
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })),
  onClickTodo: PropTypes.func.isRequired,
};

export default TodoList;