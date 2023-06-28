//Acá se deben importar los componentes que se repiten en todas las vistas
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Main({ children }){
    return (
        <div className="shrink-0 bg-cover bg-center bg-no-repeat bg-[url('/background-1.png')] md:bg-[url('/background-1-web.png')] flex flex-col min-h-screen w-full justify-between items-center">
            <NavBar />
            { children }
            <Footer />
        </div>
    )
}