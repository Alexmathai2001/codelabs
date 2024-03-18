import React, { useEffect, useState } from 'react'
import ProjectsSection from './ProjectsSection'
import SubHeader from './SubHeader'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProjectData } from '../utils/Slices/projectSlice'
import ProjectCard, { MyProjectCard } from './ProjectCard'

const MyProjects = () => {

    const [projectInfo,setProjectInfo] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        const call = async() => {
            const {data} = await axios.get("/myprojects")
            setProjectInfo(data)
        }
        call()
    },[])
    console.log(projectInfo);
    const MyProject = MyProjectCard(ProjectCard)
  return (
    <div>
        <SubHeader title={"My Projects"}/>
        <div className='my-3 mx-2'>
            {projectInfo.map((item,index) => {
                return <MyProject data={item}/>
            })}
        </div>
    </div>
  )
}

export default MyProjects