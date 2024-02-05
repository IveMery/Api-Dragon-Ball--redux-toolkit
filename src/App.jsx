import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from './counterSlice'

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  return (
    <>
      <div>
        <h1>Redux toolkit</h1>
        <p>Contador: {counter}</p>
        <button onClick={(() => dispatch(increment()))}>Sumar</button>
        <button onClick={()=> dispatch(decrement())} >Restar</button>
        <button onClick={()=>dispatch(reset())} >Resetear</button>

      </div>
    </>
  )
}

export default App
