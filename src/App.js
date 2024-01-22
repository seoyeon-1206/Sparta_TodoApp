import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([])

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const nameChangeHandler = (event) =>{
    setTitle(event.target.value)
  }

  const bodyChangeHandler = (event) =>{
    setBody(event.target.value)
  }

  const onSubmitHandler = () => {
    const newTodo = {
      id: Date.now(),  
      title,
      body,
      isDone: false
    }
    if(title === '' || body === '') alert("내용을 추가하세요!");
    else setTodo([...todo, newTodo]);
    setTitle("")
    setBody("");
  }

  const removeButtonHandler = (idToRemove) => {
    const filteredTodo = todo.filter((item) => item.id !== idToRemove);
    setTodo(filteredTodo);
  }

  const todoUpdateButtonHandler = (idToUpdate) => {
    const updatedTodo = todo.map((item) =>{
      if(item.id === idToUpdate){
        return {...item, isDone : !item.isDone};
      }
      return item;
    })
    setTodo(updatedTodo);
  }

  return (
    <div className='app-style'>
       <div>
   My Todo List
    </div>
    <div>
      제목 :&nbsp;
      <input
      value ={title}
      onChange={nameChangeHandler} 
      />
      내용 :&nbsp;
      <input
      value = {body}
      onChange={bodyChangeHandler}
      />
      <button onClick={onSubmitHandler}>추가하기</button>
    </div>

    <div>
      <h3>Working</h3>
      <div className='working-list'>
      {todo.filter((item)=> !item.isDone).map((item) => {
        return(
          <div key={item.id} className='todo-style'>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <button onClick={() => removeButtonHandler(item.id)}>삭제</button>
            <button onClick={() => todoUpdateButtonHandler(item.id)}>완료</button>
          </div>
        ) 
    })}
      </div>
    </div>

    <div>
      <h3>Done</h3>
      {todo.filter((item)=> item.isDone).map((item) => {
        return(
          <div key={item.id} className='todo-style'>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <button onClick={() => removeButtonHandler(item.id)}>삭제</button>
            <button onClick={() => todoUpdateButtonHandler(item.id)}>{item.isDone ? "취소" : "완료"}</button>
          </div>
        ) 
    })}
      </div>
    </div>
  );
}

export default App;
