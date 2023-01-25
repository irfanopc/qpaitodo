import React, { useState } from 'react'
import Navbar from './Navbar'
import './Todo.css'

function Todo() {
    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState([]);

    const addItem=()=>{
      setTodos([...todos,todo])
      setTodo("")
    }
    const editItem =()=>{

    }
    const deleteItem =() =>{
        
    }
  return (
    <div className='content'>
 <Navbar/>
 <input value={todo} placeholder='Add task' onChange={(e)=>{setTodo(e.target.value)}} />
 <button onClick={addItem}>add</button>
 {todos.map((todo,i)=>{
    return(
      <>
       <div className='card' key={i}>
        <section>
        <h3>{todo}</h3>
        </section>
        <button className='edit' onClick={editItem} >edit</button>
        <button className='delete' onClick={deleteItem}>delete</button>
       </div>
       </>
    )
 })}
    </div>
  )
}

export default Todo