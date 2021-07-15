import React, { useState, FunctionComponent } from 'react';
import { RouteComponentProps } from "@reach/router"
import { Todo, AddTodo } from '../types';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const TodoListScreen: FunctionComponent<RouteComponentProps> = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (id: string, text: string) => {
    const newTodo = { id, text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <AddTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
};

const initialTodos: Todo[] = [
  {
    id: "0",
    text: 'Walk the dog',
    complete: false,
  },
  {
    id:"1",
    text: 'Write app',
    complete: true,
  },
];

export default TodoListScreen;