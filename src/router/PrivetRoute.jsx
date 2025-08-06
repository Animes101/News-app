import React, { useContext } from 'react'
import { userCreateContext } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    const {users}=useContext(userCreateContext);

    if(users){
        return children;
    }else{
        return <Navigate to="/singin" replace />;
    }
}

export default PrivetRoute