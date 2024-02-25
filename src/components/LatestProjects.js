import React from 'react'
import ProjectCard from './ProjectCard'

const LatestProjects = () => {
  return (
    <div>
        <div className='w-full py-1  text-sm flex justify-between'>
            <p >Latest Projects</p>
            <a className='text-blue-500' href='www.sample.com'>more</a>
        </div>
        <ProjectCard />
        <ProjectCard />
    </div>
  )
}

export default LatestProjects