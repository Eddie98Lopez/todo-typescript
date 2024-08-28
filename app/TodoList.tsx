import React from "react";
import TodoListItem from "./TodoListItem";
import { useTodos } from "./TodoProvider";

const TodoList = () => {
  const list = useTodos()?.todos
  return (
    <ul>
      {list
        .sort((a, b) => Number(a.completed) - Number(b.completed))
        .map((item, i: Number) => (
          <TodoListItem key={`${i}`} item={item} />
        ))}
    </ul>
  );
};

export default TodoList;
