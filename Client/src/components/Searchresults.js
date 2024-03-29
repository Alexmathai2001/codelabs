import React, { useEffect, useState } from 'react'
import SubHeader from "./SubHeader"
import ProjectsSection from "./ProjectsSection"
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProjectData } from '../utils/Slices/projectSlice'
import Search from './Search'

const Searchresults = () => {
    const location = useLocation()
    const {search_key} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        const call = async() => {
            const response = await axios.get(`/search/`+search_key.toLowerCase())
            console.log(response.data);
            dispatch(addProjectData(response.data))
        }
        call()

    },[location.pathname])

  return (
    <div>
        <SubHeader title={"Results"}/>
        <Search />
        <div className='px-3 py-4'>
            <ProjectsSection title={"projects"}/>
        </div>
    </div>
  )
}

export default Searchresults