import React, { useState } from 'react';

import Todo from '../models/todo';

const DUMMY_DATA = [
  new Todo('Learn React'),
  new Todo('Learn Next'),
  new Todo('Learn Redux'),
  new Todo('Learn Typescript'),
  new Todo('Learn Javascript'),
];

// Type Aliases
type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextObj | null>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

type Props = { children: React.ReactNode };

const ContextProvider: React.FC<Props> = props => {
  const [todo, setTodo] = useState<Todo[]>(DUMMY_DATA);

  const addTodo = (todoItem: string) => {
    const newTodo = new Todo(todoItem);
    setTodo(prevState => prevState.concat(newTodo));
  };

  const removeTodo = (todoID: string) => {
    setTodo(prevState => prevState.filter(todo => todo.id !== todoID));
  };

  const contextValue: TodoContextObj = { items: todo, addTodo, removeTodo };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default ContextProvider;
