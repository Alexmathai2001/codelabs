import React from 'react'
import ProjectCard from './ProjectCard'

const PopularProjects = () => {
  return (
    <div className='mt-1'>
        <div className='w-full py-1  text-sm flex justify-between'>
            <p >Popular Projects</p>
            <a className='text-blue-500' href='www.sample.com'>more</a>
        </div>
        <ProjectCard />
        <ProjectCard />
    </div>
  )
}

export default PopularProjects