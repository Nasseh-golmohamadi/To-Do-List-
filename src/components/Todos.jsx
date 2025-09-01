import React, { useState } from 'react'


const Todos = ({ todos, setTodos }) => {

    const [updateEdit , SetUpdateEdit]=useState(null);

    function handleDelete(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function handleEdit(id){

        

    }

    return (
        <ul>
            {
            todos.map(todo => (
                <li key={todo.id} className='border border-2 border-line flex items-center justify-center'>
                    {todo.name}
                    <botton onClick={()=> handleDelete(todo.id)}>Delete</botton>
                    <botton onClick={()=> handleEdit(todo.id)}>Edit</botton>
                    {
                        updateEdit &&
                    <input type="text" />
                    }
                </li>
            ))
        }
        </ul>
    )
}

export default Todos