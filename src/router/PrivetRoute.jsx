import React, { useContext } from 'react'
import { userCreateContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';
import { Bars } from 'react-loader-spinner'

const PrivetRoute = ({children}) => {

    const {users,loading}=useContext(userCreateContext);

    if(loading){

        return <div className='flex justify-center items-start'>
            <Bars 
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </div>
    }
    if(users){
        return children;
    }else{
        return <Navigate state={location.pathname} to="/singin" replace />;
    }
}

export default PrivetRoute