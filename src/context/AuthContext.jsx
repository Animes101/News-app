import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase';
import {createUserWithEmailAndPassword } from "firebase/auth";


 export const userCreateContext=createContext(null);

const AuthContext = ({children}) => {
    const [users, setUsers]=useState(null);




    //user create email or password
   const createUserEmailPassword=(email,password)=>{

      return createUserWithEmailAndPassword(auth,email,password)


    }

    //Login user with google
    const loginGoogle=(provider)=>{

      return signInWithPopup(auth, provider)
    }

    useEffect(()=>{

      const unscribe=onAuthStateChanged(auth,currentUser=>{

        setUsers(currentUser);
      })


      return ()=> unscribe();

        
    },[])
  return (
      <userCreateContext.Provider value={{users, setUsers,createUserEmailPassword,loginGoogle}}>
        {children}
    </userCreateContext.Provider>
  )
}


export default AuthContext;