import React from 'react'
import './Home.css'
import InputBar from '../components/InputBar'

const Home = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;
  
  
  return (
    <div className="flex items-center justify-center black-500">
      <div className="text-white rounded-lg shadow-lg border border-2 border-dashed">
        <h2>Add your tasks in this input and enter please...</h2>
        <InputBar todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default Home