
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
