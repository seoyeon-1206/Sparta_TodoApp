import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([
    {id: 0, title: "", body: "", isDone: false}])

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const nameChangeHandler = (event) =>{
    setTitle(event.target.value)
  }

  const bodyChangeHandler = (event) =>{
    setBody(event.target.value)
  }

  const onSubmitHandler = (event) => {
    const newTodo = {
      id: todo.length + 1,
      title,
      body,
      isDone: false
    }
    setTodo([...todo, newTodo]);
    setTitle("")
    setBody("");
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
      {todo.map((item) => {
        return(
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        ) //반드시 태그 붙이기(key) 그리고 중괄호 안에 리턴()
    })}
      
    </div>
    <div>
      <h3>Done</h3>
    </div>
    </div>

  );
}

export default App;
