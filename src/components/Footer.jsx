import React from 'react'
import {Link as Anchor} from 'react-router-dom'

export default function Footer() {

  const isLoggedIn = () => localStorage.getItem('token') && localStorage.getItem('user')

  return (
    <footer className="h-[5vh] bg-white w-full">
    <div className="lg:hidden flex justify-around items-center mt-1">
      <img src="/facebook-black.svg" alt="Facebook Social" className="w-[35px]" />
      <img src="/twitter-black.svg" alt="Twitter Social" className="w-[35px]" />
      <img src="/vimeo-black.svg" alt="Vimeo Social" className="w-[35px]" />
      <img src="/youtube-black.svg" alt="Youtube Social" className="w-[35px]" />
    </div>
    <div className="hidden lg:flex flex-col w-full items-center justify-between">
      <img src="/footer.png" className="h-[200px] w-full rounded-b-[50%] m-10" />
      <div className="flex flex-row justify-around items-center w-full p-5">
        <div className="flex flex-row gap-10 font-medium text-lg">
        <Anchor to={'/'}> Home </Anchor>
        <Anchor to={ isLoggedIn() ? '/mangas' : '/NotAllow' }> Mangas </Anchor>
        </div>
        <img src="/logoDos.png" className="h-[70px]" />
        <div className="flex flex-col">
        <div className="flex justify-around items-center mt-1">
        <Anchor to={'https://www.facebook.com/'}> <img src="/facebook-black.svg" alt="Facebook Social" className="w-[30px]" /> </Anchor>
        <Anchor to={'https://twitter.com/'}> <img src="/twitter-black.svg" alt="Twitter Social" className="w-[30px]" /> </Anchor>
        <Anchor to={'https://vimeo.com/es/'}> <img src="/vimeo-black.svg" alt="Vimeo Social" className="w-[30px]" /> </Anchor>
        <Anchor to={'https://www.youtube.com/'}> <img src="/youtube-black.svg" alt="Youtube Social" className="w-[30px]" /> </Anchor>          
        </div>
        <Anchor to={''} className= "bg-orange-600 text-white flex px-[50px] py-5 text-center text-xl font-medium leading-[95.187%] rounded-md mt-2"> Donate <img src="/heart.svg" className="ms-2"/> </Anchor>
        </div>
      </div>
      <img src="/line.png" className="w-[85%] h-[1px] bg-black mb-5" />
    </div>
  </footer>
  )
}