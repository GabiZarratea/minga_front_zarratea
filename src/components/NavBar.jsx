import React, {useState}  from 'react'
import Button from './Button'

export default function NavBar() {
  const [display, setDisplay] = useState(false)
  return (
    <nav className="w-full h-[10vh] lg:h-[60vh] text-white">
        <div className="lg:hidden flex w-[90%] justify-between items-center m-3.5">

        {
              display && (<div className='drawer flex w-[100vw] h-[100vh] flex-col items-start gap-[147px] p-6 bg-gradient-to-b from-orange-600 to-orange-500 fixed top-0 left-0 shadow-2xl hover:bg-white'>
                <div className='flex h-[525px] flex-col items-center justify-left gap-8 self-stretch'>
                  <div className='flex'>
                  <img src="/UserImage.png"/>
                  <div className='flex flex-col ms-3'>
                  <p className='text-[16px]'>Lucas Ezequiel Silva</p>
                  <p className='text-[14px]'>lucasezequielsilva@gmail.com</p>
                  </div>
                  <img src="/filled.png" onClick={() => setDisplay(!display)} className='ms-[20%] w-[24px] h-[24px]'/>
                  </div>
                  <div className='text-center'>
                  <p className='p-3 bg-white w-[80vw] rounded-md text-orange-600'>Home</p>
                  <p className='p-3 w-[80vw]'>Comics</p>
                  <p className='p-3 w-[80vw]'>My Comics</p>
                  <p className='p-3 w-[80vw]'>Favorites</p> 
                  <p className='p-3 w-[80vw]'>Logout</p> 
                  </div>

                </div>
              </div>)
            }
            <img clasName= "w-[70px] h-[70px] shrink-0" src="/Menu.svg" onClick={() => setDisplay(!display)}/>
            <img src="/logoMovile.png" className="w-[40px] h-[40px] shrink-0"/>
        </div>
        <div className="hidden lg:flex flex-col items-center justify-around">
            <div className="flex w-[90%] justify-between p-6">
            {
              display && (<div className='drawer hover:bg-whiteflex min-w-[375px] h-[100vh] flex-col items-start gap-[147px] p-6 bg-gradient-to-b from-orange-600 to-orange-500 fixed top-0 left-0 shadow-2xl'>
                <div className='flex h-[525px] flex-col items-start gap-8 self-stretch'>
                  <div className='flex'>
                  <img src="/UserImage.png"/>
                  <div className='flex flex-col ms-3'>
                  <p className='text-[16px]'>Lucas Ezequiel Silva</p>
                  <p className='text-[14px]'>lucasezequielsilva@gmail.com</p>
                  </div>
                  <img src="/filled.png" onClick={() => setDisplay(!display)} className='ms-[20%] w-[24px] h-[24px]'/>
                  </div>
                  <div>
                  <p className='p-5'>Home</p>
                  <p className='p-5'>Comics</p>
                  <p className='p-5'>My Comics</p>
                  <p className='p-5'>Favorites</p> 
                  <p className='p-5'>Logout</p> 
                  </div>

                </div>
              </div>)
            }
            <img src="/Menu.svg"  onClick={() => setDisplay(!display)}/>
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
