import React from 'react'
import Catagory from '../components/Catagory'
import AllNews from '../components/AllNews'
import LeftCard from '../components/LeftCard'
import demoUser from '../assets/img/demo-card-thumbnail.png'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Qjone from '../components/Qjone'
import qimg1 from '../assets/img/swimming.png'
import qimg2 from '../assets/img/playground.png'
import qimg3 from '../assets/img/class.png'

const Home = () => {

  const handleGoogleLogin=()=>{

    alert('Google login')

  }

  const handleGithubLogin=()=>{

    alert('Github login')
  }
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
      <div className='col-span-2 flex justify-center'>
        <AllNews />
      </div>
      {/* rightSide */}
      <div className='col-span-1'>
        <h1 className='text-center font-bold text-xl'>Login Width</h1>
        <div className='border- border-black py-3 px-4'>
         <div className='flex justify-center items-center gap-5 border p-3'>
           <button onClick={handleGoogleLogin} className=' font-bold text-base'>Login Width Google</button>
           <FcGoogle className=' font-bold text-base' />
         </div>
          <div className='flex justify-center items-center gap-5 border p-3'>
            <button onClick={handleGithubLogin} className=' font-bold text-base'>Login Width Git Hub</button>
            <FaGithub className=' font-bold text-base' />
          </div>
        </div>

        <div>
          <h1 className='text-2xl font-oldEnglish'>Find Us On</h1>
          <div className=''>
            <h3 className='text-center font-bold text-2xl border border-black p-3 my-2 cursor-pointer'><FaFacebook className='w-[200px] mx-auto text-green-500' />Facebook</h3>
            <h3 className='text-center font-bold text-2xl border border-black p-3 my-2 cursor-pointer'><FaTwitter className='w-[200px] mx-auto text-green-500' />Twitter</h3>
            <h3 className='text-center font-bold text-2xl border border-black p-3 my-2 cursor-pointer'><FaInstagramSquare className='w-[200px] mx-auto text-green-500' />Instagram</h3>
          </div>
        </div>

        <div>
          <h1 className='text-2xl font-oldEnglish'>Q-Zone</h1>
          <div className=' flex flex-col justify-center items-center'>
          <Qjone img={qimg1} />
          <Qjone img={qimg2} />
          <Qjone img={qimg3} />
        </div>
        </div>
      </div>
      
    </section>
  )
}

export default Home