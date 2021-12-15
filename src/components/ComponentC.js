import React, { useReducer } from "react";
import ComponentE from "./ComponentE";
const initialState = {
    count:0
}
const reducer =(state = initialState,action)=>{
    switch(action.type){
        case 'INCREMENT' : 
            return{count:state.count+action.value}
        case 'DECREMENT' : 
            return{count:state.count-action.value}
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
        <button onClick={()=>dispatch({type:'INCREMENT',value:1})}>Increment +1</button>
        <button onClick={()=>dispatch({type:'INCREMENT',value:2})}>Increment +2</button>
        <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
        <button onClick={()=>dispatch({type:'DECREMENT',value:2})}>Decrement -2</button>
        <button onClick={()=>dispatch({type:'DECREMENT',value:1})}>Decrement -1</button>
        
    </div>
    <ComponentE/>
    </>)
}
export default ComponentC