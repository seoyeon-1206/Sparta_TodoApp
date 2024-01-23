# 내배캠 React 입문주차 개인과제 : Todo App
## 화면 구성 및 기능
- main
<img width="800" alt="image" src="https://github.com/seoyeon-1206/Sparta_TodoApp/assets/128902050/d41c91d7-7719-4f89-b155-65279c76dff0">

- todo 추가

![Jan-23-2024 12-07-03](https://github.com/seoyeon-1206/Sparta_TodoApp/assets/128902050/dd5bdae3-3aa4-4e68-b2d7-c14801546a23)

- todo 삭제

![Jan-23-2024 12-07-53](https://github.com/seoyeon-1206/Sparta_TodoApp/assets/128902050/c052f29b-868b-49ee-a6f6-7e7ec8322c09)

- todo update

![Jan-23-2024 12-08-19](https://github.com/seoyeon-1206/Sparta_TodoApp/assets/128902050/fd0f3bae-3162-404b-8c8a-5cb16feaa99c)


## 필수 요구사항
1. todo 추가, input 초기화
2. isDone 상태가 true이면 취소, false이면 완료로 조건부 렌더링
3. todo의 상태가 working이면 위쪽, done이면 아래쪽에 위치
4. Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 전체 화면의 가운데로 정렬
5. 컴포넌트 분리
   ```jsx
   import React from "react";
   const TodoItem = ({ item, onRemove, onUpdate }) => {
    return (
    <div key={item.id} className="todo-list-card">
            <div className="todo-title">{item.title}</div>
            <div className="todo-body">{item.body}</div>
            <div className="todo-btn">
            <button className = "todo-remove" onClick={() => onRemove(item.id)}>삭제       </button>
            <button className = "todo-update" onClick={() => onUpdate(item.id)}>
            {item.isDone ? "취소" : "완료"}
            </button>
            </div>  
          </div>
          )
     }
   export default TodoItem;

    ...
  
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
   
    ```


