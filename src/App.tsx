import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

import ContextProvider from './store/todos-context';

import './App.css';

const App = () => {
  return (
    <ContextProvider>
      <div className="App">
        <NewTodo />
        <Todos />
      </div>
    </ContextProvider>
  );
};

export default App;
