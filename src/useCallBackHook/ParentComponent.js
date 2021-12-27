import React, { useCallback, useState } from "react";
import Button from "./Button";
import Text from "./Text";
import Title from "./Title";

const ParentComponent = ()=>{
    const [age,setAge] = useState(25)
    const [salary, setSalary] = useState(50000)
    const incrementAge = useCallback(()=>{
        setAge(prevAge =>prevAge+1)
    },[age])
    const incrementSalary = useCallback(()=>{
        setSalary(prevSalary=>prevSalary+1000)
    },[salary])

    return(
        <div>
            <Title>Displaying Age and Salary</Title>
           <Text title='Age' count={age}/>
            <Button handleClick={incrementAge} type="age">Age</Button>
            <Text title='Salary' count={salary}/>
            <Button handleClick={incrementSalary} type="salary">Salary</Button>
            
        </div>
    )
}
export default ParentComponent;