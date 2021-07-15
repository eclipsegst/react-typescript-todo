import React from 'react';
import { Router, RouteComponentProps, Link } from "@reach/router"
import { Todo, ToggleTodo } from "../types";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{' '}
        {todo.text}
        
      </label>
      {' '}
      {/* Reference: https://stackoverflow.com/questions/30115324/pass-props-in-link-react-router */}
      <Link to={'/tododetail/'+todo.id }>View Detail</Link>
    </li>
  );
};
