import React from 'react'

export default function Input({useState, setTodo, todo}) {
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
          id: Date.now(), 
          title,
          body,
          isDone: false
        }
        if (title === '' || body === '') alert("내용을 추가하세요!");
        else setTodo([...todo, newTodo]);
        setTitle("")
        setBody("");
      }

  return (
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
  )
}
