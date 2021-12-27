import React from "react";

const Title = ({children})=>{
    console.log(`${children}`)
    return(
        <div>
            {children}
        </div>
    )
}
export default React.memo(Title);