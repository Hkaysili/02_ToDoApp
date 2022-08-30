import React, {useState, useRef, useEffect} from 'react' 
import TodoList from './components/TodoList';
import { useTodoLayerValue } from './context/TodoContext';
import './App.css';
import ToDoList_svg from './images/todo-list.jpeg'

const App = () => {
  const [{todos}, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState(""); 
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const todoInputIsNull = () => {
    if(!content ||  content.trim('').length === 0  || content.length < 1)
    {
      setContent('')
      return false;
    }
    else return true;
  }
  const handleSubmit = event => {
    // console.log(content)
    event.preventDefault()   
    if(todoInputIsNull() === false) return; 

    const newTodo = {
      id: Math.floor(Math.random() * 44234234),
      content,
      isCompleted : false
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo
    });

    setContent(''); 
  }


  return (
    <div className="container">
      <div className="img-wrapper">
        <img src={ToDoList_svg} alt="ToDo List ! Lets do it!" />
      </div>
      <form onSubmit={handleSubmit} className="todo-form">
          <input 
            type="text" 
            className="todo-input" 
            onChange={event => setContent(event.target.value)} 
            value={content}
            ref={inputRef} />
          <button className='todo-button'>
            Ekle
          </button>
      </form>

      {/*  ToDo Listesi  */}
      <TodoList todos={todos}/>
    </div>
  )
}

export default App
