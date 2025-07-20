import { useState } from 'react'
import Header from './Components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1>This is the main app</h1>
    </>
  )
}

export default App
