
import React from 'react'

function Card({user,handleRemove,id}) {
  return (
    <div className='w-52 h-full bg-zinc-300 rounded-lg flex flex-col items-center p-2'>
      <div className='w-12 h-12 bg-red-500 rounded-full  overflow-hidden'>
        <img className='w-full h-full object-cover'  src={user.image} alt="" />
      </div>
      <h2 className='text-xl font-semibold mt-1'>{user.name}</h2>
      <h4 className='text-xs opacity-50 font-semibold'>{user.email}</h4>
      <p className=' text-xs font-semibold leading-1 text-center tracking-tight mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, cumque?adipisicing elit.</p>
      <button onClick={()=>handleRemove(id)}  className='px-3 text-sm font-semibold mt-3 py-1 bg-red-600 text-white rounded-lg'>Remove It</button>
    </div>
  )
}

export default Card
