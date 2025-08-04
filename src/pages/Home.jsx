import React from 'react'
import Catagory from '../components/Catagory'
import AllNews from '../components/AllNews'

const Home = () => {
  return (
    <section className='grid grid-cols-4 justify-between'>
      {/* leftSide */}
      <div className='col-span-1'>
        <h1 className='text-center font-4xl font-bold'>All Caterogy</h1>
        <Catagory />
      </div>
      {/* MiddleSide */}
      <div className='col-span-2'>
        <AllNews />
      </div>
      {/* rightSide */}
      <div className='col-span-1'>
        <h1>right</h1>
      </div>
      
    </section>
  )
}

export default Home