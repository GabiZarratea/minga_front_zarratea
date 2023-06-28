import React from 'react'
import Button from './Button'

export default function NavBar() {
  return (
    <nav className="w-full h-[10vh] lg:h-[60vh]">
        <div className="lg:hidden flex w-[90%] justify-between items-center m-3.5">
            <img clasName= "w-[70px] h-[70px] shrink-0" src="/Menu.svg"/>
            <img src="/logoMovile.png" className="w-[40px] h-[40px] shrink-0"/>
        </div>
        <div className="hidden lg:flex flex-col items-center justify-around">
            <div className="flex w-[90%] justify-between items-center p-6">
            <img src="/Menu.svg"/>
            <img src="/logoDos.png" className="w-[193px] h-[65px] shrink-0"/>
            </div>
            <div className ='text-white inline-flex flex-col items-start gap-[15px] justify-center mt-[5%] w-[90%] p-6'>
                <p className="flex text-[64px] font-bold leading-[95.187%]">For the love of manga</p>
                <p className="text-2xl leading-[95.187%]">Explore our varieties</p>
                <p className="font-semibold leading-[95.187%]">#MingaLove❤️</p>
                <Button title="Sign In!" href="" />
            </div>
        </div>
    </nav>
  )
}
