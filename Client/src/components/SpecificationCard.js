import React from 'react'

const SpecificationCard = ({data}) => {
  return (
    <div className='bg-white mt-2 p-2'>
        <p className='py-1 text-sm font-medium'>Informations</p>
        <table className='w-full text-xs text-gray-500'>
            <tr>
                <td className='w-1/2 text-center py-2'>Category</td>
                <td className='w-1/2 text-center'>{data?.category}</td>
            </tr>
            <tr>
                <td className='w-1/2 text-center py-2'>First Release</td>
                <td className='w-1/2 text-center'>{data?.published_date}</td>
            </tr>
            <tr >
                <td className='w-1/2 text-center py-2'>Last Update</td>
                <td className='w-1/2 text-center'>{data?.last_updated}</td>
            </tr>
            <tr>
                <td className='w-1/2 text-center py-2'>Tech Stacks Used</td>
                <td className='w-1/2 text-center'>{data?.tech_used.join(', ')}</td>
            </tr>
            <tr>
                <td className='w-1/2 text-center py-2'>Database</td>
                <td className='w-1/2 text-center'>{data?.db_used}</td>
            </tr>
        </table>
    </div>
  )
}

export default SpecificationCard