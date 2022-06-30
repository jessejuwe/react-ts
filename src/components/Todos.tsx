import React, { useContext } from 'react';

import Card from './UI/Card';
import TodoItem from './TodoItem';
import { TodoContext } from '../store/todos-context';

import classes from './Todos.module.css';

// prettier-ignore

const Todos: React.FC = () => {
  const ctx = useContext(TodoContext);

  return (
    <Card>
      <div className={classes.todos}>
        <ul>
          {ctx?.items.map(item => (
            <TodoItem
              key={item.id}
              text={item.text}
              onRemoveTodo={ctx.removeTodo.bind(null, item.id)}
            />
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default Todos;
