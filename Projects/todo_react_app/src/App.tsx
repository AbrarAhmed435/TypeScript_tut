import { useState } from 'react'
import './App.css'
import AddToDo from './components/addtodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>
      TODO REACT + TYPESCRIPT
    </h1>
    <AddToDo/>
    </>
  )
}

export default App
