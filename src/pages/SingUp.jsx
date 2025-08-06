import { useState } from "react";
import { useSearchParams } from "react-router-dom";



const SingUp = () => {

  const [passwordError, setPasswordError]=useState('');

  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\s).+$/;


  const hanldeSubmit=(e)=>{
    e.preventDefault();
    const username=e.target.username.value;
    const email=e.target.email.value;
    const password=e.target.password.value;

    if(!passwordPattern.test(password)){
      setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one number, and one space.');
      return;
    }


    console.log(username,email,password)

    e.target.username.value=''
    e.target.email.value=''
    e.target.password.value=''


  }
  return (
    <div className="my-10">
      <form onSubmit={hanldeSubmit} action="" className='flex flex-col gap-3 w-2/3 mx-auto'>
        <label htmlFor="username">Name</label>
        <input className='border p-2' type="text" name="username" id="username" />
        <label htmlFor="email">Email</label>
        <input className='border p-2' type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input className='border p-2' type="password" name="password" id="password" />
        <p>{passwordError&& <span className="text-red-500">{passwordError}</span>}</p>
        <button type="submit" className="px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800">Sing Up</button>

      </form>
    </div>
  )
}

export default SingUp