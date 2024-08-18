import React from 'react'
import Card from './Card'
function Cards({users,handleRemove}) {
  return (
    <div className='w-full p-4 flex justify-center gap-10 flex-wrap max-h-96 overflow-auto'>
       {users.map((item, index) =>{
        return  <Card key={index} user={item}  id={index}  handleRemove={handleRemove}/>
       })}
      
     
    </div>
  )
}

export default Cards