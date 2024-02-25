import React from 'react'
import Search from './Search'
import TopDevelopers from './TopDevelopers'
import LatestProjects from './LatestProjects'
import ProjectsByDomain from './ProjectsByDomain'
import PopularProjects from './PopularProjects'

const Body = () => {
  return (
    <div className='px-4'>
        <Search />
        <TopDevelopers />
        <LatestProjects />
        <ProjectsByDomain />
        <PopularProjects />
    </div>
  )
}

export default Body