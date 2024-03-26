import React, { useEffect, useState } from 'react'
import SubHeader from './SubHeader'
import Search from './Search'
import ProjectCard from './ProjectCard'
import axios from 'axios'

const AllProjects = () => {

    const [projectData,setProjectData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("/getallprojects")
                console.log(data)
                setProjectData(data)
            } catch (error) {
                console.error("Error fetching project data:", error)
            }
        }
        fetchData()
    }, [])

  return (
    <div>
        <SubHeader title={"All Projects"}/>
        <div className='mx-3'>
            <Search />
            {projectData?.map((data,index) => <ProjectCard key={index} data={data} />)}
        </div>
    </div>
  )
}

export default AllProjects