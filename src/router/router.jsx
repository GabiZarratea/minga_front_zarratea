import { createBrowserRouter } from "react-router-dom"
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Main from "../layouts/Main"
import Index from "../pages/Index"
import Welcome from "../pages/NotAllow"

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
                path:'/signin',
                element: <SignIn />
            },
            {
                path:'/signup',
                element: <SignUp />
            },
        ]
    },
    {
        path:'/NotAllow',
        element: <Welcome />
    }
])

export default router