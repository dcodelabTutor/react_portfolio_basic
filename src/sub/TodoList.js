import React from 'react'
import TodoItem from './TodoItem';

//props.todos로 불러올수 있지만
//구조분해 할당으로 props안쪽의 객체 todos를 바로 가져올수도 있다
function TodoList({todos}) {
  return (
    <div>
      <h3>오늘의 할일 목록(0)</h3> 
      {
        todos.map(todo =>(
          <TodoItem todo={todo} key={todo.id} />
        ))
      }
    </div>
  )
}

export default TodoList
