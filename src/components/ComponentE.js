import React, { useContext, useState } from "react";
import { userContext } from "../App";
import ComponentF from "./ComponentF";

const ComponentE = () =>{
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const data = useContext(userContext)

    const handleSubmit=()=>{
        data.dispatch({type:'firstName',value:firstName})
        data.dispatch({type:'lastName',value:lastName})
    }

    return(<div>
        <input type="text" placeholder="FirstName" onChange={e=>setFirstName(e.target.value)}/>
        <input type="text" placeholder="LastName"  onChange={e=>setLastName(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>

    <div>ComponentE</div>
    <ComponentF/>
    </div>)
}
export default ComponentE