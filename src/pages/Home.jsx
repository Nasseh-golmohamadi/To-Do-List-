import React from 'react'
import './Home.css'
import InputBar from '../components/InputBar'
import Todos from '../components/Todos'

const Home = () => {
  return (
    <div className="flex items-center justify-center black-500">
      <div className="text-white rounded-lg shadow-lg border border-2 border-dashed">
        <h2>Add your tasks in this input and enter please...</h2>
        <InputBar />
      </div>
    </div>
  )
}

export default Home