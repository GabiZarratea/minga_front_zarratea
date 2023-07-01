import Button from "../components/Button"
import Index from "./Index"

export default function Welcome() {
    return (
        <div className ='min-h-screen text-white bg-cover bg-center bg-no-repeat bg-[url("/background-1-web.png")] flex flex-col justify-center'>
                <div className="items-center md:items-start gap-[25px] inline-flex flex-col justify-center md:p-12">
                  <p className="flex text-3xl md:text-[64px] font-bold leading-[95.187%]">For the love of manga</p>
                  <p className="text-2xl leading-[95.187%]">Explore our varieties</p>
                  <p className="font-semibold leading-[95.187%]">#MingaLove❤️</p>
                  <Button title="Login!" to='/login' />
                </div>
        </div>
    )
}
