import React from 'react'

function TodoItem({todo}) {
  const {text} = todo;
  return (
    <article>
      {text}
    </article>
  )
}

export default TodoItem
