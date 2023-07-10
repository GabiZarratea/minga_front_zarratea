import React from 'react'
import { Navigate } from 'react-router-dom'
import Register from '../pages/Register'

const ProtectedRoute = () => {

    const isLoggedIn = () => localStorage.getItem('token') && localStorage.getItem('user')
    
    if(isLoggedIn()){

        return <Navigate to={'/NotAllow'} />

    }
    return !isLoggedIn() && <Register />
}

export default ProtectedRoute


//proteger ruta signin//