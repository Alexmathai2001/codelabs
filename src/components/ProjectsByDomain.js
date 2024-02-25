import React from 'react'
import Domain from './Domain'

const ProjectsByDomain = () => {
  return (
    <div className='mt-1'>
        <div className='w-full py-1  text-sm flex justify-between'>
            <p >Projects by Domain</p>
            <a className='text-blue-500' href='www.sample.com'>more</a>
        </div>
        <Domain />
    </div>
  )
}

export default ProjectsByDomain