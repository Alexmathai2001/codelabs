import React from 'react'

const InfoCard = ({title}) => {
  return (
    <div className='w-full h-auto bg-white mt-2 p-2'>
        <p className='text-sm font-semibold border-b-2 border-gray-300 pb-1'>{title}</p>
        <p className='mt-2 text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

    </div>
  )
}

export default InfoCard