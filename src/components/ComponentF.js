import React, { useContext } from "react";
import { userContext } from "../App";

const ComponentF = () =>{
    const data = useContext(userContext)
    return(
        <div>
            <div>ComponentF</div>
            <div>{data.state.firstName+" "}{data.state.lastName}</div>
        </div>
    )
}
export default ComponentF