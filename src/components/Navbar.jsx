import React from 'react'

function Navbar() {
  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10'>
        <div>
            <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString(0,16)}</h3>
            <h1 className='text-2xl font-bold'>BreakPoint foods</h1>
        </div>
        <div>
           <input
            type="search" 
            name="search" 
            id="" 
            placeholder="Search here"
            autoComplete="off"
            className='p-3 border-gray-400 text-sm rounded-lg w-full lg:w-[25vw]'
            />
        </div>
    </nav>
  )
}

export default Navbar