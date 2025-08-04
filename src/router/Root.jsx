import React from 'react'
import { Outlet } from "react-router";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const Root = () => {
  return (
    <div className='container mx-auto'>
        <NavBar />
        <Outlet />
        <Footer />

    </div>
  )
}

export default Root