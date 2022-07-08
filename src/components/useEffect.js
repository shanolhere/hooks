import React, {useState, useEffect} from 'react'

const UseEffect = () => {
    const initialData = 0
    const [state, setState] = useState(initialData)
    useEffect (() => {
        document.title = `Chats(${state})`;
        // alert(`You have ${state} Chats`)
    })
  return (
    <>
     <div class="main-container">
        <div className="result">
            <p>{state}</p>
        </div>
        <div class="buttons">
            <button class="incr" onClick={() => {setState(state+1)}}>INCR</button>
            
        </div>
     </div>
    </>
  )
}

export default UseEffect