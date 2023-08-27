"use client"
import Header from '@/Components/Header'
import React, { useState } from 'react'
import Home from './Home/page'

const page = () => {
  
  // const [a,seta] = useState("Dyanesh")
  
 
  return (
    <>
    {/* <Header name={a}/> */}
    <Home/>
     
      {/* <button onClick={()=>{
        seta("Hi buddy")
      }} className='bg-gray-200 mt-10  px-5 py-5  ml-1'>Hello</button> */}
    </>

  )
}

export default page