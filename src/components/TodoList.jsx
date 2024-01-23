import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({setTodo, items, updateTitle}) => {
  const removeButtonHandler = (item) => {
    const filteredTodo = items.filter((todoItem) => todoItem.id !== item.id);
    setTodo(filteredTodo);
  }

  const todoUpdateButtonHandler = (item) => {
    const updatedTodo = items.map((todoItem) => {
      if (todoItem.id === item.id) {
        return { ...todoItem, isDone: !todoItem.isDone };
      }
      return todoItem;
    });
    setTodo(updatedTodo);
  }
    return (
        <div className="todo-list">
        <div className="todo-list-title">{updateTitle}
        <div className = "todo-list-group">
          {items.map((item) => (
            <TodoItem 
              key={item.id}
              item={item}
              removeButtonHandler = {removeButtonHandler}
              todoUpdateButtonHandler = {todoUpdateButtonHandler}
            />
          ))}
        </div>
        </div>
      </div>
    );
};
export default TodoList;