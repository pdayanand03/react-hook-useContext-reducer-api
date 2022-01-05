import { createContext, useReducer } from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import ParentComponent from './useCallBackHook/ParentComponent';
import Counter from './useMemoHook/Counter';

export const userContext = createContext();
const initialState = {
  firstName:"",
  lastName:""
}
const reducer = (state=initialState,action) =>{
  switch(action.type){
    case "firstName" :
      return {...state,firstName:action.value}
    case "lastName" :
      return {...state,lastName:action.value}
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <userContext.Provider value={{state, dispatch}}>
      <div className="App">
        {/* <ComponentC/> */}
        {/* <ParentComponent/> */}
        <Counter/>
      </div>
    </userContext.Provider>
    
  );
}

export default App;
