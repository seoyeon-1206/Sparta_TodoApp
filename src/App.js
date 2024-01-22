import { useState } from 'react';
import './App.css';
import TodoList from './components/\bTodoList';


function App() {
  const [todo, setTodo] = useState([])

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const nameChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  const bodyChangeHandler = (event) => {
    setBody(event.target.value)
  }

  const onSubmitHandler = () => {
    const newTodo = {
      id: Date.now(), //고유한 id로 
      title,
      body,
      isDone: false
    }
    if (title === '' || body === '') alert("내용을 추가하세요!");
    else setTodo([...todo, newTodo]);
    setTitle("")
    setBody("");
  }

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
      <div className='header'>
        <div className='input-group'>
        <div className='input-list'> 
        <label>제목 :</label>
        <input
          className='input-field'
          value={title}
          onChange={nameChangeHandler}
        />
        </div>
        <div className='input-list'>
        <label>내용 :</label>
        <input
          className='input-field'
          value={body}
          onChange={bodyChangeHandler}
        />
        </div>
        </div>
        
        <button className= "submit-btn" onClick={onSubmitHandler}>추가하기</button>
      </div>

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
