import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";

//home
function Home() {
  return (
    <div className="page-container">
      <h1>Welcome to My React App</h1>
      <p>This is the home page.</p>
    </div>
  );
}

//props
function PropsPage({ message }) {
  return (
    <div className="page-container">
      <h1>Props Page</h1>
      <p>{message}</p>
    </div>
  );
}

//todo list
function TodoList() {
  const [todos, setTodos] = React.useState(["Item 1", "Item 2", "Item 3"]);

  //delete item
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="page-container">
      <h1>Todo List</h1>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            {/* delete button */}
            <button className="delete-button" onClick={() => removeTodo(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// routing
function App() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/props">Props Page</Link>
          </li>
          <li>
            <Link to="/todo">Todo List</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/props" element={<PropsPage message="Hello World!" />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;
