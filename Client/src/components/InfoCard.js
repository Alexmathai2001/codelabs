import React from 'react'

const InfoCard = ({title,data}) => {
  return (
    <div className='w-full h-auto bg-white mt-2 p-2'>
        <p className='text-sm font-semibold border-b-2 border-gray-300 pb-1'>{title}</p>
        <p className='mt-2 text-xs capitalize'>{data}</p>
        

    </div>
  )
}

export default InfoCard