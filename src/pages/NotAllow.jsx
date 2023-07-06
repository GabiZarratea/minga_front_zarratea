import NavBar from "../components/NavBar"
import {Link as Anchor} from 'react-router-dom'

export default function Welcome() {
  
  const isLoggedIn = () => localStorage.getItem('token') && localStorage.getItem('user')

    return (
      <>
        <NavBar />
        <div className ='min-h-screen text-white bg-cover bg-center bg-no-repeat bg-[url("/background-1-web.png")] flex flex-col justify-center items-center'>
                <div className="items-center gap-[25px] inline-flex flex-col justify-center md:p-1">
                  <p className="flex text-3xl md:text-[64px] font-bold leading-[95.187%]">For the love of manga</p>
                  <p className="text-2xl leading-[95.187%]">Explore our varieties</p>
                  <p className="font-semibold leading-[95.187%]">#MingaLove❤️</p>
                  {isLoggedIn() ? (
                    <Anchor to={'/'} className='bg-white text-orange-600 flex justify-center items-center gap-2.5 px-[55px] py-5 text-center text-xl font-medium leading-[95.187%] rounded-md w-80'>
                      Explore Mangas!
                    </Anchor>
                  ) : (
                    <Anchor to={'/signin'} className='bg-white text-orange-600 flex justify-center items-center gap-2.5 px-[55px] py-5 text-center text-xl font-medium leading-[95.187%] rounded-md w-60'>
                      Sign In!
                    </Anchor>
                  )}
                </div>
        </div>
      </>
    )
}
