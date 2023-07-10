import { createBrowserRouter } from "react-router-dom";
import Register from '../pages/Register'
import Main from "../layouts/Main";
import SignIn from "../pages/signin";
import Index from "../pages/Index";
import Welcome from "../pages/NotAllow"
import ProtectedRoute from "./ProtectedRoute"
import FormManga from "../pages/Manga-Form";
import Mangas from "../pages/Mangas";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children: [
            {
                path:'/',
                element: <Index/>
            },
            {
                path:'/mangas',
                element: <Mangas/>
            }

        ]
    },
    {
        path:'/register',
        element: (
            <ProtectedRoute>
            <Register />
            </ProtectedRoute>
        )
    },
    {
        path:'/signin',
        element: <SignIn/>
    },
    {
      path: "/manga-form",
      element: <FormManga />,
    },
    {
        path:'/NotAllow',
        element: <Welcome />
    }
])

export default router