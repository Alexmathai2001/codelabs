import React from 'react'

const Search = () => {
  return (
    <div className=''>
        <form  className='flex'>
            <input className='border w-full border-black my-2 py-2 rounded-lg px-2 text-sm' placeholder='
            Search for projects...' type='text'></input>
            <button><img className='w-6 absolute -ms-8 -mt-3' alt='search' src='/asset/search.png'></img></button>
        </form>
    </div>
  )
}

export default Search