
import './App.css'
import Pushpa from './component/hook1'
import Hook2 from './hook2'
import Hook3 from './hook3 '
import Mpp from './hook4'
import Uihook5 from './uihook5'
import NewAPIcarts from './newAPIcarts'
import NewAPI2 from './newAPI2'
import About from './About'
import { useState } from 'react'
import Next from './Next'
import Allinfo from './Search'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Search from './Search'









 
const App=()=>{
    //  latest way of react routet dom.
  const router=createBrowserRouter([
    {
      path:'/',
      element:<home/>
    },
    {
    path:'/about',
    element:<About/>
    },
    {
      path:'/nextpage',
      element:<Next/>
    },
    {
      path:'/allinfo',
      element:<Allinfo/>
    },
  ])

  // Oldest way of use react router dom.

  // const router=createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //   <Route path="/" element='{<Home/>}'  />
  //   <Route path='/about' element='{<About/>}'  />
  //   <Route path='/next' element='{<Next/>}'  />
  //   <Route path='/allinfo' element='{<Allinfo/>}'  />
  //     </Route>
  //   )
  // )
 
  return(
    <>
    <RouterProvider router={router}/>

    {/* <Nav/>
   <Y1/>
   <Y2/>
   <Y3/> */}



{/* <Pushpa/>
<Hook2/> */}
{/* <Hook3/> */}


{/* <Mpp/> it is unique and api geerated phones*/}
{/* <Uihook5/> it is unique and api generated Products */}  

{/* <NewAPIcarts/>  */}

<NewAPI2/>
 {/* <About/>
 <Next/> */}
 {/* <Search/> */}



    </>
  )
}
export default App
