import { useState } from 'react';
import './App.css'
import Home from './pages/Home'
import Todos from './components/Todos'


function App() {
const [todos , setTodos]=useState([]);
  return (
    <>
      <Home todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
