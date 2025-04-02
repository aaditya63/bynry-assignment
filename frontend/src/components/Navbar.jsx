import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation()
    const navigate = useNavigate()
    
    const [isDashboard,setIsDashboard] = useState(false);
    


    useEffect(() => {
        if(location.pathname == '/'){
        setIsDashboard(false)
      }
      else setIsDashboard(true)
    }, [location.pathname])
    
    
  return (
    <div className='absolute top-0 w-full'>
        <div className='flex justify-between my-5'>
            {!isDashboard && <div className='ml-5 text-white text-2xl font-bold'> 
                Home
            </div>}
            {!isDashboard && <div onClick={()=>navigate('/dashboard')} className='mr-5  rounded-2xl text-xl px-2 py-1 text-white bg-purple-400 hover:bg-purple-500 shadow-[inset_0_0_5px_white] cursor-pointer '>
                Dashboard
            </div>}
            {isDashboard && <div className='ml-5 text-white text-2xl font-bold'> 
                Dashboard
            </div>}
            {isDashboard && <div onClick={()=>navigate('/')} className='mr-5  rounded-2xl text-xl px-2 py-1 text-white bg-purple-400 hover:bg-purple-500 shadow-[inset_0_0_5px_white] cursor-pointer '>
                Home
            </div>}
        </div>
        <div className='w-full h-[0.2px] bg-white mt-2'>
        </div>
    </div>
  )
}
