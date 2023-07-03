import React from 'react'
import { Navigate} from 'react-router-dom'
import Register from '../pages/Register'

const ProtectedRoute = () => {

    let user = false
    
    if(user){

        return <Navigate to={'/NotAllow'} />

    }
    return !user && <Register />
}

export default ProtectedRoute