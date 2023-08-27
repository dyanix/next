"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@/Components/Card'
const Home = () => {
  // const [color, setcolor] = useState("red")
  const [image, setImage] = useState([])
  useEffect(() => {
    getImages()


  }, [])

  const getImages = async () => {

    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data
      console.log(data)
      setImage(data)
      // console.log(image)
    } catch (error) {
      console.log("Error")
    }
  }



  return (
    <>


      <button onClick={() => {
        getImages()
      }} className='px-5 py-3 bg-slate-500 text-slate-100 ml-6 mt-6'>
        Get Images
      </button>
      {/* <button className='px-5 py-3 bg-slate-500 text-slate-100 ml-6 mt-6' onClick={() => {
        setcolor('blue') 
      }}>Change color</button>
      <h1>my bike color is {color}</h1> */}
      {image.map((elem, i) => {
        return <Card
          key={i}
          imageUrl={elem.download_url}
          author={elem.author}

        />
        // return <img  key={i} 
        //          src={elem.download_url}
        //          width={400}
        //          height={400}
        //          className=' inline-block m-10  rounded-lg'
        //          />




      })}
    </>

  )
}

export default Home