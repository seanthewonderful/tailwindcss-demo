import React from 'react'

function MainBanner() {
  return (
    <main className='flex flex-col lg:flex-row justify-between h-[90vh] w-full'>

      <div className='flex flex-col justify-center items-center w-full lg:w-1/2 bg-slate-600'>
        <h1 className='text-4xl lg:text-6xl mb-5'>Experience the Thrill</h1>
        <p>Ride Fast. Ride Hard. Ride Safe.</p>
      </div>

      <img
        className='h-full' 
        src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      
    </main>
  )
}

export default MainBanner