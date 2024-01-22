import React from "react";

const TodoItem = ({ item, onRemove, onUpdate }) => {
  return (
    <div key={item.id} className='todo-style'>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
            <button onClick={() => onRemove(item.id)}>삭제</button>
            <button onClick={() => onUpdate(item.id)}>
            {item.isDone ? "취소" : "완료"}
            </button>
          </div>
  )
}

export default TodoItem;

