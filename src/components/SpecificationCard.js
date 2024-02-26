import React from 'react'

const SpecificationCard = () => {
  return (
    <div className='bg-white mt-2 p-2'>
        <p className='py-1 text-sm font-medium'>Informations</p>
        <table className='w-full text-xs text-gray-500'>
            <tr>
                <td className='w-1/2 text-center py-2'>Database</td>
                <td className='w-1/2 text-center'>MongoDB</td>
            </tr>
            <tr>
                <td className='w-1/2 text-center py-2'>Frontend</td>
                <td className='w-1/2 text-center'>React</td>
            </tr>
            <tr >
                <td className='w-1/2 text-center py-2'>Backend</td>
                <td className='w-1/2 text-center'>NodeJS</td>
            </tr>
            <tr>
                <td className='w-1/2 text-center py-2'>Styling</td>
                <td className='w-1/2 text-center'>TailwindCSS</td>
            </tr>
            <tr>
                <td className='w-1/2 text-center py-2'>Hosting</td>
                <td className='w-1/2 text-center'>AWS</td>
            </tr>
        </table>
    </div>
  )
}

export default SpecificationCard