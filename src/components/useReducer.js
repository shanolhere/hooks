import React, {useReducer} from 'react'

const reducer = (state, action)=>{
    if(action.type === "INCR"){
        state = state+1;
    }
    else if(action.type === "DECR"){
        state = state-1;
    }
    else{
        state = 0;
    }
    return state;
}

const UseReducer = () => {
    const initialData = 0;
    const [state, dispatch] = useReducer(reducer, initialData)
  return (
    <>
     <div class="main-container">
        <div class="result">
            <p>{state}</p>
        </div>
        <div class="buttons">
            <button class="incr" onClick={() => dispatch({type : "INCR"}) }>INCR</button>
            <button class="reset" onClick={() => dispatch({type : "RESET"})} >RESET</button>
            <button class="decr" onClick={() => dispatch({type : "DECR"})}>DECR</button>
        </div>
     </div>
    </>
  )
}

export default UseReducer;