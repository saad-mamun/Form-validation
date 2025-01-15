import React from 'react'
const Card2 = (props) => {
  return (
    <div>
      <div className=" p-6 bg-black text-white w-[300px]">
        <img className='h-32 w-32 rounded-full mb-3' src={props.photo} alt="" />
        <h1 className='text-2xl font-bold'>User name is {props.username} </h1>
        <h2>
          {props.city}, {props.age}
        </h2>
        <h3>{props.profession}</h3>
        <button className="px-4 py-2 bg-white text-black mt-4">
          Add Friend
        </button>
      </div>
    </div>
  );
}

export default Card2
