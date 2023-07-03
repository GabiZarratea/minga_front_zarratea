//Acá se deben importar los componentes que se repiten en todas las vistas
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Main({ children }){
    return (
        <div className="shrink-0 bg-cover bg-center bg-no-repeat md:bg-[url(hidden)] flex flex-col min-h-screen w-full items-center">
            <NavBar />
            { children }
            <Footer />
        </div>
    )
}