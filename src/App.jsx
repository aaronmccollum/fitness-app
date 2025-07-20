import { useState } from 'react'
import Header from './Components/Header'
import InputWorkout from './Components/InputWorkout'
import WorkoutRecords from './Components/WorkoutRecords'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <WorkoutRecords />
        <InputWorkout />
      </main>
    </>
  )
}

export default App
