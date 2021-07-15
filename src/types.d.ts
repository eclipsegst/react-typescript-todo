export interface Todo {
  id: string;
  text: string;
  complete: boolean;
}

export type ToggleTodo = (selectedTodo: Todo) => void;

export type AddTodo = (id: string, text: string) => void;
