import React from 'react'
import Search from './Search'
import TopDevelopers from './TopDevelopers'
import ProjectsSection from './ProjectsSection'
import ProjectsByDomain from './ProjectsByDomain'
import Header from './Header'
import RichTextEditor from './RichTextEditor'

const Browse = () => {
  return (
    <div className='px-4'>
        <Header />
        <Search />
        <TopDevelopers />
        <ProjectsSection title={"Latest Project"}/>
        <ProjectsByDomain />
        <ProjectsSection title={"Popular Project"}/>
    </div>
  )
}

export default Browse