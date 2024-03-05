import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = ({data}) => {
  return (
    <div className='w-full bg-slate-200 mt-2 p-4 flex flex-col justify-center items-center'>
        <img src='/asset/profile-picture.png' className='w-20'></img>
        <p className='font-semibold text-gray-700 mt-1 capitalize'>{data}</p>
        <p className='text-xs text-gray-400 py-1'>Web Developer</p>
        <Link to='/' className='bg-[#5429FF] flex gap-2 items-center w-2/5 py-2 rounded-md px-3'>
            <img src='/asset/laptop.png' className='w-5'></img>
            <p className='text-sm text-white'>Full Profile</p>
            </Link>
    </div>
  )
}

export default ProfileCard