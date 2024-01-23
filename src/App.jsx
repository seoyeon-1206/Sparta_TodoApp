import { useState } from 'react';
import './App.css';
import TodoList from './components/\bTodoList';
import Input from './components/Input';


function App() {
  const [todo, setTodo] = useState([])

  const removeButtonHandler = (idToRemove) => {
    const filteredTodo = todo.filter((item) => item.id !== idToRemove);
    setTodo(filteredTodo);
  }

  const todoUpdateButtonHandler = (idToUpdate) => {
    const updatedTodo = todo.map((item) => {
      if (item.id === idToUpdate) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    })
    setTodo(updatedTodo);
  }

  return (
    <div className='app-style'>
      <div className='app-name'>
        My Todo List
      </div>
      <Input useState={useState} setTodo={setTodo} todo={todo}/>

      <div className='todo-list-section'> 
      <TodoList 
        items={todo.filter((item => !item.isDone))}
        updateTitle="Working"
        onRemove={removeButtonHandler}
        onUpdate={todoUpdateButtonHandler}
      />

      <TodoList
        items={todo.filter((item => item.isDone))}
        updateTitle="Done"
        onRemove={removeButtonHandler}
        onUpdate={todoUpdateButtonHandler}
      />
      </div>
    </div>
  );
}

export default App;
