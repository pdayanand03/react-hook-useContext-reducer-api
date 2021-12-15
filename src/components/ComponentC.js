import React, { useReducer } from "react";
import ComponentE from "./ComponentE";
const initialState = {
    count:0
}
const reducer =(state = initialState,action)=>{
    switch(action.type){
        case 'INCREMENT' : 
            return{count:state.count+1}
        case 'DECREMENT' : 
            return{count:state.count-1}
        case 'RESET' : 
            return initialState
        default:    
            return state;
    }
}

const ComponentC = () =>{
    
    const [state, dispatch] = useReducer(reducer,initialState)
    return(<>
    <div>
        <div>ComponentC</div>
        <h5>Increment Counter</h5>
        <div>Counter {state.count}</div>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
    </div>
    <ComponentE/>
    </>)
}
export default ComponentC