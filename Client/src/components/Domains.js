import React from 'react'
import SubHeader from './SubHeader'
import Search from './Search'
import Domain from './Domain'

const Domains = () => {
  return (
    <div>
        <SubHeader title={"Domains"} />
        <div className='px-3'>
            <Search />
            <Domain stacks={[]}/>
        </div>
    </div>
  )
}

export default Domains