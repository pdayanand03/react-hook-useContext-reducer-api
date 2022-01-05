import React, { useState,useMemo } from "react";

const Counter = () =>{
    const [counterOne,setCounterOne] = useState(0)
    const [counterTwo,setCounterTwo] = useState(0)
    
    const HandleCounterOne = ()=>{
        setCounterOne(counterOne+1)
    }
    const HandlecounterTwo = ()=>{
        setCounterTwo(counterTwo+1)
    }
    const isEven = useMemo(() =>{
        let i=0;
        while(i<900000000)i++
        return(counterOne % 2===0)
    },[counterOne])
    return (
        <div>
            <div>
                <button onClick={HandleCounterOne}>Counter-{counterOne}</button>
                {isEven?'even':'odd'}
            </div>
            <div><button onClick={HandlecounterTwo}>Counter-{counterTwo}</button></div>
            
            
            

        </div>
    )
}
export default Counter