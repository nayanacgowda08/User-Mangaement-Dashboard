// import { useState } from 'react'
// // import Navbar from './Components/Navbar'
// import Card from './Components/Card'
// import Form from './Components/Form'

// function App() {
// // const data =[
// //   {image:"https://images.unsplash.com/photo-1548778052-311f4bc2b502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRheWxvciUyMHN3aWZ0fGVufDB8fDB8fHww",name:"End Game",artist:"Taylor Swift",fav:false},
// //   {image:"https://images.unsplash.com/photo-1585700072192-cdd4b8321a14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFdlZWtuZHxlbnwwfHwwfHx8MA%3D%3D",name:"After Hours",artist:"Weeknd",fav:false},
// //   {image:"https://images.unsplash.com/photo-1508317788165-e66f44e30d65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuYSUyMGRlbCUyMHJleXxlbnwwfHwwfHx8MA%3D%3D",name:"Born to die",artist:"Lana Del Rey",fav:false},
// //   {image:"https://plus.unsplash.com/premium_photo-1675864663121-0e9e335174b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9uZSUyMGRpcmVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",name:"Night Changes",artist:"1D",fav:false},
// // ]
// // const [songData, setSongData] = useState(data)

// // const handleClick = (index)=>{
// //   setSongData((prev)=>{
// //     return prev.map((item,itemIndx)=> {
// //       if(itemIndx===index) return {...item, fav : !item.fav}
// //       return item
// //     })
// //   })
// // }
//    return (

//       <>
//       <Form/>
//     </>
//      )
//     }
//         {/* //     <div className='bg-red-300 w-full h-screen'>
// //       <Navbar data={songData} />
// //       <div className='px-10 flex gap-10 flex-wrap'>
// //       {songData.map((obj,ind)=>{ */}
// {/* //         return <Card  key={ind}  data={obj}  handleClick={handleClick}  index={ind}/>
// //       })}
// //       </div> */}
// {/* //     </div> */}
 

// export default App
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