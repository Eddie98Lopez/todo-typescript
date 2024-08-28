"use client";
import React, { useState, createContext, useContext } from "react";
import { TodoItem } from "./types";

type TTodoContext = {
  todos: TodoItem[];
  dispatch: ([]: TodoItem[]) => void;
};

const TodoListContext = createContext<TTodoContext | null>(null!);
export const useTodos = () => {
  const TodosContext = useContext(TodoListContext);
  if (!TodoListContext) {
    throw new Error(
      "TodoListCotext has to be used within <CurrentUserContext.Provider>"
    );
  }
  return TodosContext;
};

const sampleTasks = [
  { id: "a;lkjdfalkjsd", task: "go to gym", completed: false },
  { id: "aidna;972p98dk", task: "eat veggies", completed: true },
  { id: "samd2987piljx", task: "go to bed", completed: true },
];

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<TodoItem[]>(sampleTasks);

  return (
    <TodoListContext.Provider value={{ todos, dispatch: setTodos }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoProvider;
