import React from 'react'

const ProjectCard = () => {
  return (
    <div className='flex border-gray-200 border-[1px] p-2 mt-1'>
            <div>
            <img className='max-w-40 ' src='/asset/project-screenshot.png' alt='project-screenshot'></img>
            </div>
            <div className='ms-2 flex flex-col justify-evenly w-full'>
                <p className='font-medium text-xs text-blue-500'>React</p>
                <p className='text-sm font-medium'>E-rental Web-App</p>
                <p className='text-xs text-gray-500'>Alex Mathai</p>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2 w-2/3'>
                        <div>
                            <div className='flex gap-1'>
                                <img className='w-4 h-4' src='/asset/eye.png'></img>
                                <p className='text-xs text-gray-400'>1.5 k</p>
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <img className='w-4 h-4' src='/asset/download-button.png'></img>
                            <p className='text-xs text-gray-400'>1.5 k</p>
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