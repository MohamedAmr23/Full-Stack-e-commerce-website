import React from 'react'
import {assets} from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
const Navbar = ({setToken}) => {
  const navigate = useNavigate()
  const logOut = ()=>{
    setToken('')
    navigate('/login')
  }
  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt='' />
        <button onClick={logOut} className='bg-gray-600 text-white px-5 py-2 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar