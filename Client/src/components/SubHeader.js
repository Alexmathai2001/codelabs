import React from 'react'

const SubHeader = ({title}) => {
  return (
    <div className="flex justify-between px-4 py-2 h-14 items-center bg-r[F5F5F5] border border-b-2">
      <div className="flex">
        <a href="www.sample.com"><img className="w-6" alt="logo" src="/asset/next.png"></img></a>
        <p className="ms-3 font-semibold text-gray-500">{title}</p>
      </div>
    </div>
  )
}

export default SubHeader