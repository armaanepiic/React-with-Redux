import { useState } from "react";
import { tasks } from "./../data/tasks";
import { moreTasks } from "./../data/tasks";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  function handleTodo() {
    setTodos(tasks);
  }
  console.log(tasks);
  
  function handleMoreTodo() {
    setTodos([...todos, ...moreTasks]);
  }
  function handleEditTodo() {
    const copiedTasks = tasks.map(task => ({ ...task }));
    console.log(copiedTasks);
    
  }

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {" - "} <button onClick={handleEditTodo(todo.id)}>Edit</button>{" "}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handleTodo}>Load...</button>
        <br />
        <button onClick={handleMoreTodo}>Load more...</button>
      </div>
    </div>
  );
}
// 2: 20
