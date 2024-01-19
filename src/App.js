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
      id: todo.length + 1,
      title,
      body,
      isDone: false
    }
    if(title === '' || body === '') alert("내용을 추가하세요!");
    else setTodo([...todo, newTodo]);
    setTitle("")
    setBody("");
  }

  const removeButtonHandler = (id) => {
    const filteredTodo = todo.filter((todo) => todo.id != id);
    setTodo(filteredTodo);
  }

  const todoUpdateButtonHandler = (id) => {
    const updatedTodo = todo.map((item) => {
      if (item.id === id) {
        return {...item, isDone: !item.isDone};
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
      onChange={(event)=>nameChangeHandler(event)} //인자를 넣어줄때는 이렇게 함수로 감싸줌
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
      {todo.filter((item) => !item.isDone).map((item) => {
        return(
          <div key={item.id} className='todo-style'>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <button onClick={() => removeButtonHandler(item.id)}>삭제</button>
            <button onClick={() => todoUpdateButtonHandler(item.id)}>완료</button>
          </div>
        ) //반드시 태그 붙이기(key) 그리고 중괄호 안에 리턴()
    })}
      </div>
    </div>

    <div>
      <h3>Done</h3>
      {todo.filter((item) => item.isDone).map((item) => {
        return(
          <div key={item.id} className='todo-style'>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <button onClick={() => removeButtonHandler(item.id)}>삭제</button>
            <button onClick={() => todoUpdateButtonHandler(item.id)}>{item.isDone ? "취소": "완료"}</button>
          </div>
        ) //반드시 태그 붙이기(key) 그리고 중괄호 안에 리턴()
    })}
      </div>

    </div>
  );
}

export default App;
