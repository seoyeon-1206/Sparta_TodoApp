import React from "react";

const TodoItem = ({ item, onRemove, onUpdate }) => {
  return (
    <div key={item.id} className="todo-list-card">
            <div className="todo-title">{item.title}</div>
            <div className="todo-body">{item.body}</div>
            <div className="todo-btn">
            <button className = "todo-remove" onClick={() => onRemove(item.id)}>삭제</button>
            <button className = "todo-update" onClick={() => onUpdate(item.id)}>
            {item.isDone ? "취소" : "완료"}
            </button>
            </div>
            
          </div>
  )
}

export default TodoItem;

