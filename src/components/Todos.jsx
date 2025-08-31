import React from 'react'


const Todos = ({ todos, setTodos }) => {

    return (
        <ul>
            {
            todos.map(todo => (
                <li key={todo.id} className='border border-2 border-line flex items-center justify-center'>
                    {todo.name}
                </li>
            ))
        }
        </ul>
    )
}

export default Todos