import React from 'react';
import{ useState,useEffect } from 'react'
import axios from 'axios';

const NewAPIcarts = () => {
    const [setmain,setnoty]=useState('')
    const[setmy,setyour]=useState(true)
    console.log(setmain);

    const NewAPI=async()=>{
        const APIS=await axios.get('https://dummyjson.com/carts')
        setnoty(APIS.data)
        setyour(false)
        
        
    }
    useEffect(()=>{
NewAPI()
    },[])
    
  return (
    <div className=' flex flex-row flex-wrap '>
        {
            setmy==false ? (
   setmain.carts.map((data)=>{
    return(
        <div>
        <p className=' mt-10 text-center '> Cart - {data.id}</p>
        <div className=' flex border w-screen justify-evenly shadow-2xl hover:scale-105 duration-300 p-4 m-5 rounded-xl overflow-x-auto'>
             {
            data.products.map((data)=>{return  <div className=' border p-3 m-5 w-40 flex flex-col  shadow-lg rounded-2xl'>
                <img className='self-center h-24 w-24 rounded-2xl' src={data.thumbnail} alt="gggg" />
                <p className=' font-semibold overflow-hidden h-24 w-32'>{data.title}</p>
                <p className='
                 text-xs'>price-{data.price}</p>
                <p className=' text-xs'>total-{data.total}</p>
               </div>})
        }
        </div>
       
       
        </div>
    )
   })

            ):<p>page is comming</p>
        }
{/* {
          setmy==false ? (
          
               <div className=' border p-3 m-5 flex flex-col shadow-2xl rounded-2xl'>
                    <img className=' self-center h-24  w-24 rounded-2xl' src={maindatadata.products[0].thumbnail} />
                    <p className=' font-semibold w-32 h-12 overflow-hidden'>{maindatadata.products[0].title}</p>
                    <p className=' text-xs'>Price - {maindatadata.products[0].price}</p>
                    <p className=' text-xs'>Ratings - {maindatadata.products[0].rating}</p>
                     
                    
               </div>
  
          ):<p>data is comming</p>
        } */}
    </div>
    
  )
}

export default NewAPIcarts
