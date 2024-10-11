import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const Mpp=()=>{
    const[maindatadata,setmaindatadata]=useState('')
    const [loading,setloading] = useState(true)
    console.log(maindatadata);
    
    const Raju=async()=>{
      const apidata=await axios.get("https://dummyjson.com/products/search?q=phone")
      setmaindatadata(apidata.data)
      setloading(false)
      
    }
    useEffect(()=>{
      Raju()
    },[])
    return (
      <div className=' flex flex-row flex-wrap  justify-center '>
       
        {
          loading==false ? (
            maindatadata.products.map((data)=>{
              return(
                <>
               <div className=' border p-3 m-5 flex flex-col shadow-2xl rounded-2xl'>
                    <img className=' self-center h-24  w-24 rounded-2xl' src={data.thumbnail} />
                    <p className=' font-semibold w-32 h-12 overflow-hidden'>{data.title}</p>
                    <p className=' text-xs'>Price - {data.price}</p>
                    <p className=' text-xs'>Ratings - {data.rating}</p>
                    {/* <p className=' text-xs'>ReviewerName-{data.ReviewerName}</p> */}
                     
                    
               </div>
                </>
               
              )
            })
          ):<p>data is comming</p>
        }
  
  {
          loading==false ? (
          
               <div className=' border p-3 m-5 flex flex-col shadow-2xl rounded-2xl'>
                    <img className=' self-center h-24  w-24 rounded-2xl' src={maindatadata.products[0].thumbnail} />
                    <p className=' font-semibold w-32 h-12 overflow-hidden'>{maindatadata.products[0].title}</p>
                    <p className=' text-xs'>Price - {maindatadata.products[0].price}</p>
                    <p className=' text-xs'>Ratings - {maindatadata.products[0].rating}</p>
                     
                    
               </div>
  
          ):<p>data is comming</p>
        }
  
       
      </div>
  
   
    )
}
export default Mpp