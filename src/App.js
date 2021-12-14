import { createContext } from 'react';
import './App.css';
import ComponentC from './components/ComponentC';

export const userContext = createContext();

function App() {
  return (
    <userContext.Provider value={{firstName:"Dayanand",lastName:"Patil"}}>
      <div className="App">
        <ComponentC/>
      </div>
    </userContext.Provider>
    
  );
}

export default App;
