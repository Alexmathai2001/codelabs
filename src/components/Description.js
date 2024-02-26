import React from 'react'
import SubHeader from './SubHeader'
import InfoCard from './InfoCard'
import SpecificationCard from './SpecificationCard'
import ProfileCard from './ProfileCard'
import ProjectsSection from './ProjectsSection'

const Description = () => {
  return (
    <div className='px-4 bg-[#F5F5F5]'>
        <SubHeader title={"Project Name"}/>
        <div className='flex justify-between w-full mt-4'>
            <p className='w-2/3 line-clamp-2 font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <div className='h-6 px-2 py-[2px] bg-green-200 text-green-600 text-sm'>Free</div>
        </div>
        <div className='flex justify-between mt-2'>
            <p className='text-xs text-gray-500'>Author Name</p>
            <div className='flex gap-2'>
                <img className='w-4 h-4' src='/asset/clock.png'></img>
                <p className='text-xs text-gray-500'>3 min</p>
            </div>
        </div>
        <div className='mt-1 w-full '>
                <img className='w-full aspect-auto' src='/asset/project-thumbnail.png'></img>
                <div className='flex justify-evenly'>
                    <button className='w-2/5 flex justify-center gap-2 items-center py-[6px] text-sm bg-[#5429FF] text-white font-semibold rounded-md'>
                        <img className='w-4' src='/asset/live.png'></img>
                        <p>Live Demo</p></button>
                    <button className='w-2/5 py-[6px] text-sm flex justify-center gap-2 items-center bg-gray-500 text-white font-semibold rounded-md'>
                        <img className='w-4' src='/asset/screenshots.png'></img>
                        <p>Screenshots</p>
                        </button>
                </div>
        </div>
        <InfoCard title={"Overview"}/>

        <InfoCard title={"Features"}/>

        <SpecificationCard />

        <ProfileCard />

        <ProjectsSection title={"Related Projects"} />
    </div>
  )
}

export default Description