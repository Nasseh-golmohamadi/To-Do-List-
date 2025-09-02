import React, { useState } from 'react'


const Todos = ({ todos, setTodos }) => {

    const [updateEdit, SetUpdateEdit] = useState(null);
    const [edited, setEdited] = useState("");
    const [isDone, setIsDone] = useState(false);

    function handleDelete(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function handleEdit(id, name) {
        SetUpdateEdit(id);
    }

    function handleSave(id, value) {
        setTodos(
            todos.map((item) =>
                item.id == id ? { ...item, name: value } : item
            )
        );

        setEdited("")
        SetUpdateEdit(null);
    }

    function handleCheck(id) {
        setTodos(
            todos.map((obj)=>
                obj.id == id ? {...obj , checked:!obj.checked} : obj 
            )
        )

        // const selectedObj = todos.find((element) => {
        //     return element.id === id
        // })
        // selectedObj.checked=!selectedObj.checked
        // setTodos([...todos])
        // console.log(todos);
        
    }

    return (
        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id} className='border border-2 border-line flex items-center justify-center'>
                        {
                            updateEdit == todo.id ? (
                                <>
                                    <input type="text" value={edited ? edited : todo.name} onChange={(e) => setEdited(e.target.value)} />
                                    <button onClick={() => handleSave(todo.id, edited ? edited : todo.name)}>save</button>
                                    <button onClick={() => SetUpdateEdit(null)}>cancel</button>
                                </>
                            ) : (
                                <>
                                    <input
                                        type="checkbox"
                                        checked={todo.checked}
                                        onChange={() => handleCheck(todo.id)}
                                    />
                                    <div className={todo.checked ? "line-through text-black-500" : ""}>
                                        {todo.name}
                                    </div>
                                    <botton onClick={() => handleDelete(todo.id)}>Delete</botton>
                                    <botton onClick={() => handleEdit(todo.id)}>Edit</botton>
                                </>
                            )
                        }
                    </li>
                ))
            }
        </ul>
    )
}

export default Todos