import React, { useContext, useRef } from 'react';

import { TodoContext } from '../store/todos-context';

import Card from './UI/Card';

import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const ctx = useContext(TodoContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value; // optional chaining

    // Guard Clause
    if (enteredText.trim().length === 0) return;

    ctx?.addTodo(enteredText);

    // props.onAddTodo(enteredText); // calls a function that updates state in App.tsx

    todoTextInputRef.current!.value = '';
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="todoText">To-Do Text</label>
        <input id="todoText" type="text" ref={todoTextInputRef} />
        <button>Create New To-Do</button>
      </form>
    </Card>
  );
};

export default NewTodo;
