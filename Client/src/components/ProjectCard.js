import React from 'react'

const ProjectCard = (project) => {
    console.log(project);
  return (
    <div className='flex border-gray-200 border-[1px] p-2 mt-1'>
            <div>
            <img className='bg-cover w-40 aspect-video border-[1px] border-gray-500' src={project?.data?.thumbnail} alt='project-screenshot'></img>
            </div>
            <div className='ms-2 flex flex-col justify-evenly w-full'>
                <p className='font-medium text-xs text-blue-500'>{project?.data?.category}</p>
                <p className='text-sm font-medium'>{project?.data?.title}</p>
                <p className='text-xs text-gray-500'>{project?.data?.publisher}</p>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2 w-2/3'>
                        <div>
                            <div className='flex gap-1'>
                                <img className='w-4 h-4' src='/asset/eye.png'></img>
                                <p className='text-xs text-gray-400'>{project?.data?.views} k</p>
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <img className='w-4 h-4' src='/asset/download-button.png'></img>
                            <p className='text-xs text-gray-400'>{project?.data?.downloads} k</p>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <div className='flex gap-1'>
                            <img className='w-4 h-4' src='/asset/clock.png'></img>
                            <p className='text-xs text-gray-400'>3 min</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProjectCard