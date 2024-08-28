"use client";
import React, { useState } from "react";
import { TodoItem as TTask } from "./types";
import { v4 as uuidv4 } from 'uuid';
import { useTodos } from "./TodoProvider";


const AddTask = () => {
  const [input, setInput] = useState<string>("");
  const {todos,dispatch} = useTodos()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch([{id:uuidv4(), task:input,completed:false},...todos])
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Add Task:</label>
      <input name="task" value={input} onChange={handleChange} />
      <button>add todo</button>
    </form>
  );
};

export default AddTask;
