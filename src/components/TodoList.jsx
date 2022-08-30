import React from 'react'
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {
        todos && todos.map((todo, index) => (
          <Todo key={index} todo={todo}/>
        ))
      }
    </div>
  )
}

export default TodoList
