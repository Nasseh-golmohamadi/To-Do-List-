import React, { useState } from 'react'
const InputBar = (props) => {

    const todos = props.todos;
    const setTodos = props.setTodos;

    const [inputValue,setInputvalue]=useState("");


  
    function handleSubmit(e){
        e.preventDefault();

        const todo={
          id:Math.floor(Math.random() * 1000) + 1 ,
          name:inputValue,
          checked:false
        }

        setTodos([...todos, todo]);
        
        setInputvalue("");

    }
    
    localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <>
    <div className='input-part flex items-center justify-center'>
        <input type="text" onKeyDown={(e)=>{
            if(e.key == "Enter"){
                 handleSubmit(e)
            }
        }
        } placeholder="Type yours" value={inputValue} onChange={(e)=> setInputvalue(e.target.value) } />
        <button onClick={(e)=> handleSubmit(e)}>Enter</button>
    </div>
    </>
  )
}

export default InputBar