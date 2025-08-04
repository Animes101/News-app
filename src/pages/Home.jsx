import React from 'react'
import Catagory from '../components/Catagory'
import AllNews from '../components/AllNews'
import LeftCard from '../components/LeftCard'
import demoUser from '../assets/img/demo-card-thumbnail.png'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section className='grid grid-cols-4 justify-between'>
      {/* leftSide */}
      <div className='col-span-1'>
        <h1 className='text-center font-4xl font-bold'>All Caterogy</h1>
        <Catagory />
        <div>
          <LeftCard img={demoUser} name={'Animes Barmanm'} desc={'Bayern Slams Authorities Over Flight Delay to Club World Cup'} />
          <LeftCard img={demoUser} name={'Animes Barmanm'} desc={'Bayern Slams Authorities Over Flight Delay to Club World Cup'} />
          <LeftCard img={demoUser} name={'Animes Barmanm'} desc={'Bayern Slams Authorities Over Flight Delay to Club World Cup'} />
        </div>
      </div>
      {/* MiddleSide */}
      <div className='col-span-2'>
        <AllNews />
      </div>
      {/* rightSide */}
      <div className='col-span-1'>
        <h1 className='text-center font-bold text-xl'>Login Width</h1>
        <div className='border- border-black py-3 px-4'>
         <div className='flex justify-center items-center gap-5 border p-3'>
           <button className=' font-bold text-base'>Login Width Google</button>
           <FcGoogle className=' font-bold text-base' />
         </div>
          <div className='flex justify-center items-center gap-5 border p-3'>
            <button className=' font-bold text-base'>Login Width Git Hub</button>
            <FaGithub className=' font-bold text-base' />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Home