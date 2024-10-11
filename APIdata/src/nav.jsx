import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useNavigation } from 'react-router-dom'


const Nav = () => {
    const hello = useNavigate()
  return (
   <>

        <p onClick={()=>hello("/about")} className=' cursor-pointer text-white mr-6 '>About</p>
 
   
   
   </>
  )
}

export default Nav