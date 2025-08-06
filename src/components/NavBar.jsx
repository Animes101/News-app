import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { userCreateContext } from '../context/AuthContext'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const NavBar = () => {

  const {users}=useContext(userCreateContext);

  console.log(users)

  const handleLogout=()=>{
    signOut(auth)
    .then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});


  }






  
  return (
    <div>
        <header>
            <h1 className='text-black text-6xl text-center font-oldEnglish font-bold'>The Dragon News</h1>
            <h3 className='text-center font-3xl font-bold'>Journalism Without Fear or Favour</h3>
            <h3 className='text-center font-3xl font-bold'>Sunday, November 27, 2022</h3>
            <div className='flex justify-center items-center'>
              <span className='text-white bg-red-400 p-4 rounded-sm'>Latest</span>
              <marquee className='text-red-500 font-bold font-oldEnglish' direction="left">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</marquee>
            </div>

            <nav className="p-4 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                  <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 visible">
                    <img className='w-[50px] h-[50px] rounded-full' src={users?.photoURL} alt={users?.displayName} />
                    <h1 className='text-green-500'>{users?.displayName}</h1>
                  </a>
                  <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                    </li>
                    <li className="flex">
                      <NavLink className={({ isActive }) =>
    isActive
      ? 'flex items-center px-4 -mb-1 border-b-2 dark:text-violet-600 dark:border-violet-600'
      : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'
  } rel="noopener noreferrer" to={'/'}>Home</NavLink>
                    </li>
                    <li className="flex">
                      <NavLink className={({ isActive }) =>
    isActive
      ? 'flex items-center px-4 -mb-1 border-b-2 dark:text-violet-600 dark:border-violet-600'
      : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'
  }  rel="noopener noreferrer" to={'about'}>About</NavLink>
                    </li>
                    <li className="flex">
                      <NavLink className={({ isActive }) =>
    isActive
      ? 'flex items-center px-4 -mb-1 border-b-2 dark:text-violet-600 dark:border-violet-600'
      : 'flex items-center px-4 -mb-1 border-b-2 border-transparent'
  } rel="noopener noreferrer" to={'/career'}>Career</NavLink>
                    </li>
                  </ul>
                  <div className="items-center flex-shrink-0 hidden lg:flex">
                    {users&& users? <button onClick={handleLogout} className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Log Out</button>
                                                               :<div>
                         <Link to={'/singin'} className="self-center px-8 py-3 rounded">Sign in</Link>
                         <Link to={'/singup'} className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</Link>
                      </div> }
                    
                      
                  </div>
                  <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              </nav>
        </header>
    </div>


  )
}

export default NavBar