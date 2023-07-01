//Acá se deben importar los componentes que se repiten en todas las vistas
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Main({ children }){
    return (
        <div className="shrink-0 flex flex-col min-h-screen w-full justify-between items-center">
            <NavBar />
            { children }
            <Footer />
        </div>
    )
}