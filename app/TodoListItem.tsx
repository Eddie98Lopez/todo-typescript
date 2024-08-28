
import React from "react";
import { TodoItem } from "./types";
import { useTodos } from "./TodoProvider";

type TodoItemProps = {
  item: TodoItem;
};

const TodoListItem = ({ item }: TodoItemProps) => {
  const { task, completed, id } = item;
  const { todos, dispatch } = useTodos();

  const styles = {
    color: completed === true ? "lightgrey" : "black",
    textDecoration: completed === true ? "line-through" : "none",
  };

  const handleChange = (e) => {
    const { id } = e.target;
    console.log(todos?.filter((item: TodoItem) => item.id !== id));
    dispatch([
      { ...item, completed: !completed },
      ...todos.filter((item: TodoItem) => item.id !== id),
    ]);
  };

  return (
    <li style={styles} id={id} onClick={handleChange}>
      {task}
    </li>
  );
};

export default TodoListItem;
