import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({items, onRemove, onUpdate, updateTitle}) => {
    return (
        <div className="todo-list">
        <div className="todo-list-title">{updateTitle}
        <div className = "todo-list-group">
          {items.map((item) => (
            <TodoItem 
              key={item.id}
              item={item}
              onRemove={onRemove}
              onUpdate={onUpdate}
            />
          ))}
        </div>
        </div>
      </div>
    );
};
export default TodoList;