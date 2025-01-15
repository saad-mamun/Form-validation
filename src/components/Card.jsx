import React from 'react'

const Card = (props ) => {


  return (
    <div className='p-6 bg-black text-white w-[300px]'>
      <h1>User name is {props.user} </h1>
      <h2>{props.city}, {props.age}</h2>
      <button className='px-4 py-2 bg-white text-black mt-4'>Add Friend</button>
    </div>
  )
}

export default Card
