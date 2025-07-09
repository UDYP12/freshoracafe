import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../Context/AppContext'

const SellerLogin = () => {

    const {setIsSeller,isSeller,navigate} = useAppContext();
    const [email,setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(()=>{
if(isSeller){
    navigate("/seller");
}
    },[isSeller])

const onSubmitHandler = async(event)=>{
event.preventDefault();
setIsSeller(true);
}
  return (
    !isSeller &&
    <>
    <form action="" onSubmit={onSubmitHandler} className='min-h-screen flex items-center test-sm text-black '>

<div className='flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-indigo-400'>
    <p  className='text-2xl m-auto text-green-600 '> <span className='text-indigo-600'>Seller</span> Login</p>
    <div className='w-full'>
        <p>Email</p>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" required name="" id="" placeholder='enter email' className='border border-indigo-400 rounded w-full p-2 mt-1 outline-purple-400' />

    </div>
     <div className='w-full'>
        <p>Password</p>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="" required id="" placeholder='enter password' className='border border-indigo-400 rounded w-full p-2 mt-1 outline-purple-400' />

    </div>
    <button  className='bg-primary text-black w-full p-2 rounded-md cursor-pointer'>Login</button>
</div>

    </form>
    
    
    </>
  )
}

export default SellerLogin