import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Nav() {
    const navigate = useNavigate();
  return (
    <div className='flex w-full h-32 bg-slate-900 items-center justify-center  text-white'>
      <p className='p-2 m-4 cursor-pointer' onClick={() => navigate('/')} >Gainer Form</p>
      <p className='p-2 m-4 cursor-pointer' onClick={() => navigate('/assesories')}>Assessories Form</p>
      <p className='p-2 m-4 cursor-pointer' onClick={() =>  navigate('/machine')}>machines Form</p>
      <p className='p-2 m-4 cursor-pointer' onClick={() =>  navigate('/deleteData')}>DeleteData</p>
    </div>
  )
}
