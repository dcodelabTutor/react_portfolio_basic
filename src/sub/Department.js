import { useEffect, useState } from "react";
import TodoList from "./TodoList";

function Department(){ 
  let data = [
    {
      id: 1,
      text: '할일 1',
      checked: true
    },
    {
      id: 2,
      text: '할일 2',
      checked: false
    },
    {
      id: 3,
      text: '할일 3',
      checked: true
    },
  ]
  const [todos, setTodos] = useState(data);

  return (
    <section className="content location">
      <div className="inner">
        <h1>Department</h1>
          <TodoList todos={todos} abc={"abc"} />        
      </div>
    </section>
  )
}

export default Department;
