import React, { useEffect, useState } from 'react'
import Domain from './Domain'
import axios from 'axios'

const ProjectsByDomain = () => {
  const [fullDomain,setFullDomain] = useState([])


  useEffect(() => {
    const fetch = async () => {
      const total_domains = await axios.get('/getFullDomains')
      setFullDomain(total_domains.data)
    }
    fetch()
  },[])
  return (
    <div className='mt-1'>
        <div className='w-full py-1  text-sm flex justify-between'>
            <p >Projects by Domain</p>
            <a className='text-blue-500' href='www.sample.com'>more</a>
        </div>
        <Domain stacks={fullDomain}/>
    </div>
  )
}

export default ProjectsByDomain