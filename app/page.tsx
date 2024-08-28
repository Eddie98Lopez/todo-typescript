"use client"
import AddTask from "./AddTask";
import TodoList from "./TodoList";
import { useTodos } from './TodoProvider';

export default function Home() {

  
  return <main>
    <AddTask/>
    <TodoList/>
  </main>;
}
