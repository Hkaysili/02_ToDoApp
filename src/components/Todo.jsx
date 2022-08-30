import clsx from 'clsx';
import React, { useState } from 'react';
import {GrFormClose, GrFormCheckmark, GrFormEdit} from 'react-icons/gr';
import {AiFillCheckCircle} from "react-icons/ai";
import { useTodoLayerValue } from '../context/TodoContext';  

const Todo = ({ todo }) => {
  const [{}, dispatch] = useTodoLayerValue();
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(todo.content);

  const removeTodo = todoId => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: todoId
    })
  } 
  const completeTodo = todoId => {
    dispatch({
      type: 'COMPLETE_TODO',
      payload: todoId
    })
  }
  const todoStyle = clsx({
    ['todo-row']: true,
    ['completed'] : todo.isCompleted 
  });

  const updateTodo = ({todoId, newValue}) => {
    dispatch({
      type: 'UPDATE_TODO',
      payload: {
        todoId,
        newValue
      }
    })

    setContent('');
    setEditable(false);
  }
  return (
    <div className={todoStyle}>
        <div>
          {
            editable ? (
              <input 
                type="text" 
                value={content} 
                onChange={event => setContent(event.target.value)} 
                className="todo-input-edit" />
            ) : (
              todo.content
            )
          }
        </div>
        <div className='todo-icons'>
          {
             editable ? '' : (
              <div className="todo-check-case">
                <AiFillCheckCircle className='todo-icon' onClick={() => completeTodo(todo.id)} />
              </div>
             )
          }
          {
            !editable  && <GrFormClose className='todo-icon' onClick={() => removeTodo(todo.id)} />
          }
          {
            editable ? (
              <GrFormCheckmark 
                  className='todo-icon' 
                  onClick={() => {
                    updateTodo({
                      todoId : todo.id,
                      newValue : content 
                    })
                  }} />
            ) : (
              <GrFormEdit className='todo-icon' onClick={() => setEditable(true)}/>
            )
          } 
        </div>
    </div>
  )
}

export default Todo
