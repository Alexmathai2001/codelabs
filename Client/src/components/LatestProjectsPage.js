import React from 'react'
import SubHeader from './SubHeader'
import ProjectsSection from './ProjectsSection'

const LatestProjectsPage = () => {
  return (
    <div>
        <SubHeader title={"Latest Project"}/>
        <div className='px-3'>
            <div className='flex justify-between py-2'>
                <h1 className='font-semibold'>Projects (2)</h1>
                <button className='flex opacity-75'>
                    <img src='/asset/sorting.png' className='w-6'></img>
                    <p>Sort</p>
                </button>
            </div>
            <ProjectsSection title={"Latest Projects"} />

        </div>
    </div>
  )
}

export default LatestProjectsPage