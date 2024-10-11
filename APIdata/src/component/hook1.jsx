import React from "react";
import { useState } from "react";

const Pushpa = () => {
    const[data,setdate]=useState('Pushpa is my nick name:')
     const [hii,hello]=useState(0)
  return (
    <div>
      <div>Pushpendra kumar vishwakarma</div>
      <div>{data}</div>
      <button className=" border bg-blue-100" onClick={()=>setdate('Pushpendra kumar is my nick name')}>change</button>
      <div className=" hover:cursor-pointer" onClick={()=>hello('5')} >{hii}</div>
      



    </div>
  )
}

export default Pushpa


