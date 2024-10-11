// import React from "react";
// import axios from 'axios'
// import {useState,useEffect } from "react";
// const Hook3=()=>{
//   const [data,setdata]=useState(0)

// let nitish=async()=>{
//   const data1= await axios.get("https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=London")
//   console.log(data1.data);
// }
// useEffect(()=>{
//   nitish()
// },[])
// nitish()
//     return(
//         <>
        
//         </>
//     )
// }
// export default Hook3



import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'

const hook3  = () => {
  const [data,setdata]=useState(0)
  const Ram=async()=>{
    const hii=axios.get('https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=London')
    console.log(hii);
    
  }
  useEffect(()=>{
    Ram()
  })
  return (
    <div>
      <button onClick={Ram} className=" border bg-yellow-700 text-white">submit</button>
    </div>
  )
}

export default hook3 

