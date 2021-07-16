import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom"
import { Router, RouteComponentProps, Link } from "@reach/router"

import TodoListScreen from "./TodoList";
import TodoDetail from "./TodoDetail";
import Home from "./Welcome";
import Login from "./Login";

const App = () => (
  <div>
    <nav>
      {/* Reference: https://reach.tech/router/example/basic */}
      <Link to="/">Home</Link> {" | "}
      <Link to="/login">Login</Link> {" | "}
      <Link to="/todolist">Todo List</Link>
      {/* <Link to="/tododetail/1">Todo Detail</Link> */}
    </nav>
    <Router>
      <Home path="/" />
      {/* Reference: https://reach.tech/router/typescript */}
      <TodoListScreen path="/todolist" /> 
      <TodoDetail path="/tododetail/:id" /> 
      <Login path="/login" /> 
    </Router>
  </div>
);

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);
