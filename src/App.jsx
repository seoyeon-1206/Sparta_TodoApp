import { useState } from 'react';
import './App.css';
import TodoList from './components/\bTodoList';
import Input from './components/Input';

function App() {
  const [todo, setTodo] = useState([])

  return (
    <div className='app-style'>
      <div className='app-name'>
        My Todo List
      </div>
      <Input setTodo={setTodo} todo={todo}/>

      <div className='todo-list-section'> 
      <TodoList 
        setTodo={setTodo}
        items={todo.filter((item => !item.isDone))}
        updateTitle="Working"
      />

      <TodoList
        setTodo={setTodo}
        items={todo.filter((item => item.isDone))}
        updateTitle="Done"
      />
      </div>
    </div>
  );
}

export default App;
