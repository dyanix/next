import React from 'react'

const Card = (props) => {
  return (
    <>
   <div className="flex justify-center  items-center bg-gray-100">
      <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center m-10">
        <img src={props.imageUrl} alt={props.author} className="w-32 h-32 rounded-full mb-4" />
        <h2 className="text-lg font-semibold text-gray-800">{props.author}</h2>
      
    </div>
    </div>

    </>
    
  )
}

export default Card