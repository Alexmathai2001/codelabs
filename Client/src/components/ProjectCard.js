import React from 'react'
import { calcDate } from '../utils/dateDifference';
import { Link } from 'react-router-dom';

const ProjectCard = ({data}) => {
  return (
    <Link to={`/description/${data?.project_id}`} className='flex border-gray-200 border-[1px] p-2 mt-1'>
            <div>
            <img className='bg-cover w-40 aspect-video border-[1px] border-gray-500' src={data?.thumbnail} alt='project-screenshot'></img>
            </div>
            <div className='ms-2 flex flex-col justify-evenly w-full'>
                <p className='font-medium text-xs text-blue-500 capitalize'>{data?.category}</p>
                <p className='text-sm font-medium capitalize'>{data?.title}</p>
                <p className='text-xs text-gray-500 capitalize'>{data?.publisher}</p>
                <div className='flex justify-between w-full'>
                    <div className='flex gap-2 w-2/3'>
                        <div>
                            <div className='flex gap-1'>
                                <img className='w-4 h-4' src='/asset/eye.png'></img>
                                <p className='text-xs text-gray-400'>{data?.views} k</p>
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <img className='w-4 h-4' src='/asset/download-button.png'></img>
                            <p className='text-xs text-gray-400'>{data?.downloads} k</p>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <div className='flex gap-1'>
                            <img className='w-4 h-4' src='/asset/clock.png'></img>
                            <p className='text-xs text-gray-400'>{calcDate(data?.published_date).result || "New"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
  )
}

export default ProjectCard