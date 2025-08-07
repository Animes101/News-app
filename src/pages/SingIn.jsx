import React from 'react'
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SingIn = () => {

  const location = useLocation();


  const navigate=useNavigate();

  const hanldeSubmit=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;

 

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        console.log(userCredential)

       navigate(location?.state || '/');
        // Signed in

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode,errorMessage)
      })


    e.target.email.value='';
    e.target.password.value='';

  }
  return (
    <div className='my-10'>
      <form onSubmit={hanldeSubmit} action="" className='flex flex-col gap-3 w-2/3 mx-auto'>
        <label htmlFor="email">Email</label>
        <input className='border p-2' type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input className='border p-2' type="password" name="password" id="password" />
        <button type="submit" className="px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800">Sing Up</button>

      </form>
    </div>
  )
}

export default SingIn