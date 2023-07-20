//Acá se deben importar los componentes que se repiten en todas las vistas
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import { Outlet } from "react-router-dom"

export default function Main(){
    return (
        <div className="shrink-0 flex flex-col min-h-screen w-full justify-between items-center">
            <NavBar />
                <Outlet />
            <Footer />
        </div>
    )
}