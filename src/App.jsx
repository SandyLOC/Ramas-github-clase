import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hola from './component/Hola'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>Rama principal :{')'} </h1>

        <Hola />
    </div>
  )
}

export default App
