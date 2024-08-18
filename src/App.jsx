
import React, { useState } from 'react'
import Form from './Components/Form'
import Cards from './Components/Cards'  // add Cards component here


function App() {

  const [users,setUsers] = useState([])
  const handleubmitData = ((data)=>{
    setUsers([...users, data])
})

  const handleRemove = (id)=>{
    // setUsers(()=>users.filter((item,ind)=>{
    //   ind!=id
    setUsers(users.filter((item, ind) => ind !== id));
    
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-zinc-200'>
      <div className='container mx-auto'>
      <Cards users={users}  handleRemove={handleRemove}/>  
      <Form handleubmitData={handleubmitData}   />
      </div>
    </div>
  )
}

export default App
