import React, {useState} from 'react'

const UseState = () => {
    const initialData = 0
    const [state, setState] = useState(initialData)
    //console.log(setState)
  return (
    <>
     <div class="main-container">
        <div class="result">
            <p>{state}</p>
        </div>
        <div class="buttons">
            <button class="incr" onClick={() => {setState(state+1)}}>INCR</button>
            <button class="reset" onClick={() => {setState(0)}} >RESET</button>
            <button class="decr" onClick={() => {setState(state-1)}}>DECR</button>
        </div>
     </div>
    </>
  )
}

export default UseState;