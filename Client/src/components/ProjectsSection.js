import React from 'react'
import ProjectCard from './ProjectCard'
import { useSelector } from 'react-redux'

const ProjectsSection = ({title}) => {

  const projectData = useSelector((store) => store?.project?.ProjectData)

  return (
    <div>
        <div className='w-full py-1  text-sm flex justify-between'>
            <p >{title}</p>
            <a className='text-blue-500' href='www.sample.com'>more</a>
        </div>
        {projectData?.map((project,index) => (<ProjectCard data={project} key={index}/>))}
    </div>
  )
}

export default ProjectsSection