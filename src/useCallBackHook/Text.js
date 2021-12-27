import React from "react";

const Text = ({title,count})=>{
    console.log(`${title}`)
    return(
        <div>
            {title}:{count}
        </div>
    )
}
export default React.memo(Text);