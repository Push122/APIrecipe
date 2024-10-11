import React from "react";
import { useState } from "react";
const Hook2=()=>{
    const[count,setcount]=useState(0)
    return(
        <>
    <button onClick={()=>setcount(count+1)}>Click to increse {count}</button>
    <br/>
    <button onClick={()=>setcount(count-1)}> Click to decrese {count}</button>
        </>
    )
}
export default Hook2