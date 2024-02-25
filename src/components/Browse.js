import React from 'react'
import Search from './Search'
import TopDevelopers from './TopDevelopers'
import LatestProjects from './LatestProjectsSection'
import ProjectsByDomain from './ProjectsByDomain'
import PopularProjects from './PopularProjects'
import Header from './Header'

const Browse = () => {
  return (
    <div className='px-4'>
        <Header />
        <Search />
        <TopDevelopers />
        <LatestProjects />
        <ProjectsByDomain />
        <PopularProjects />
    </div>
  )
}

export default Browse