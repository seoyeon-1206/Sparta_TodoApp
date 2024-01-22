import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({items, onRemove, onUpdate, updateTitle}) => {
    return (
        <div>
        <h3>{updateTitle}</h3>
        <div className='working-list'>
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
    );
};
export default TodoList;