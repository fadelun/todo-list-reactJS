import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    console.log("active");
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((item) => item.completed !== false));
        console.log(status);
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((item) => item.completed !== true));
        console.log(status);
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>my todo list</h1>
      </header>
      <Form setInputText={setInputText} inputText={inputText} setTodos={setTodos} todos={todos} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
};

export default App;
