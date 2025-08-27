import React, { useState } from 'react'
import Todos from './Todos';
const InputBar = () => {
    const [inputValue,setInputvalue]=useState("")
    const [submit , setSubmit]=useState([])
    
    function handleSubmit(){
        setSubmit(inputValue)
    }
    
  return (
    <>
    <div className='input-part flex items-center justify-center'>
        <input type="text" onKeyDown={(e)=>{
            if(e.key == "Enter"){
                 setSubmit(inputValue)
            }
        }
        } placeholder="Type yours" value={inputValue} onChange={(e)=> setInputvalue(e.target.value)} />
        <button onClick={()=> handleSubmit()}>Enter</button>
    </div>
    <Todos value={submit} />
    </>
  )
}

export default InputBar