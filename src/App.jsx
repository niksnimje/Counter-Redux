import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { DecrementFunc, IncrementFunc } from './Redux/action'

function App() {
  
  const Countervalue=useSelector((store)=>store.counter)

  const dispatch=useDispatch()

  const handelIncrement=()=>{
    dispatch(IncrementFunc())
  }

  const handelDecrement=()=>{
    dispatch(DecrementFunc())

  }

  return (
  <>
    <h1>Counter {Countervalue}</h1>
    <button onClick={handelIncrement}>+</button>
    <button onClick={handelDecrement}>-</button>

  </>
  )
}

export default App
