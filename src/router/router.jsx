import { createBrowserRouter } from "react-router-dom"
import Register from '../pages/Register'
import Main from "../layouts/Main"
import Index from "../pages/Index"
import Welcome from "../pages/NotAllow"
import ProtectedRoute from "./ProtectedRoute"

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
            {
                path:'/',
                element: <Index />
            },
            {
                path:'/register',
                element: (
                    <ProtectedRoute>
                    <Register />
                    </ProtectedRoute>
                )
            },
        ]
    },
    {
        path:'/NotAllow',
        element: <Welcome />
    }
])

export default router