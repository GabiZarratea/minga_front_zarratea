import React from 'react'
import { Navigate } from 'react-router-dom'
import SignIn from '../pages/signin'

const ProtectedSignIn = () => {

    const isLoggedIn = () => localStorage.getItem('token') && localStorage.getItem('user')
    
    if(isLoggedIn()){

        return <Navigate to={'/NotAllow'} />

    }
    return !isLoggedIn() && <SignIn />
}

export default ProtectedSignIn