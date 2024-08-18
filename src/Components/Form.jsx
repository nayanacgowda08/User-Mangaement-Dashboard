// import React, { useRef, useState } from 'react'
// import {useForm} from 'react-hook-form'

// function Form() {
// //     const name = useRef(null)
// //     // const age = useRef(null)
// // const evtClick = (evt)=> {
// //     evt.preventDefault()
// //     console.log(name.current.value)
    
// // }
// //   const [val,setVal] = useState({name:""}) 
// //   const click = (ent)=>{
// //     ent.preventDefault();
// //     console.log(val);

//     const {register,handleSubmit} = useForm();

    
// //   }
//   return (
//     <>
//     {/* <div className='p-4'onClick={evtClick} > */}
//     {/* using ref */}
//     {/* <form action="" >
//         <input  ref={name}  type="text" placeholder='name'   />
//         <input type="submit" />
//     </form> */}
//     {/* </div> */}
//     <div className='p-4' >
//     {/* using useState */}
//     {/* <form action="" onClick={click}>
//         <input  onChange={(evt)=>setVal({name : evt.target.value})}  type="text" placeholder='name'   />
//         <input type="submit" />
//     </form> */}

//         {/* using useForm */}
//     <form action="" onSubmit={handleSubmit(data=>console.log(data)
//     )} >
//         <input   {...register("name")}  type="text" placeholder='name'   />
//         <input {...register("email")}  type="email" placeholder='email'   />
//         <input type="submit" />
//     </form>
//     </div>
//     </>
//   )
// }

// export default Form

import React from 'react'
import {useForm} from 'react-hook-form'
function Form({handleubmitData}) {
    const {register,handleSubmit ,reset}= useForm()
    const handleSubmitForm = ((data)=>{
        handleubmitData(data)
        reset();
    })

  return (
    <div className='flex mt-10 gap-10 justify-center items-center'>
        <form   onSubmit={handleSubmit(handleSubmitForm)} action="" className='flex  gap-10'>
            <input {...register("name")} type="text" className='px-2 py-1 rounded-lg text-base outline-none font-semibold'  placeholder='name'/>
            <input {...register("email")} type="text" className='px-2 py-1 rounded-lg text-base outline-none font-semibold'  placeholder='email'/>
            <input {...register("image")} type="text"  className='px-2 py-1 rounded-lg text-base outline-none font-semibold'  placeholder='image url' />
            <input type="submit" className='px-3 py-1 rounded-md bg-blue-600 text-white font-semibold' />
        </form>
    </div>
  )
}

export default Form