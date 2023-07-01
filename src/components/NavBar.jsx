import React, {useState}  from 'react'
import Button from './Button'

export default function NavBar() {
  const [display, setDisplay] = useState(false)
  return (
    <nav className="w-full text-white absolute flex flex-col items-center justify-around">
            <div className="flex w-[90%] justify-between items-center p-6">
            <img src="/Menu.svg" onClick={() => setDisplay(!display)}/>
            {
              display && (<div className='drawer sm:flex text-center sm:text-start min-w-[100%] sm:min-w-[410px] h-[100vh] flex-col sm:items-start gap-[147px] p-6 bg-gradient-to-b from-orange-600 to-orange-500 fixed top-0 left-0 shadow-2xl'>
                <div className='flex h-[525px] flex-col items-center sm:items-start gap-8 self-stretch'>
                <div className='flex w-full justify-end'>
                <img src="/filled.png" onClick={() => setDisplay(!display)} className='sm:hidden flex justify-end ms-[20%] h-[24px]'/>
                </div>
                  <div className='flex flex-row items-center text-center lg:justify-between sm:w-[400px] w-[250px]'>
                    <img src="/UserImage.png" className='w-[50px] mb-2 sm:m-0'/>
                    <div className='flex flex-col ms-3'>
                      <p className='text-[16px]'>Lucas Ezequiel Silva</p>
                      <p className='text-[14px]'>lucasezequielsilva@gmail.com</p>
                    </div>
                    <img src="/filled.png" onClick={() => setDisplay(!display)} className='hidden sm:block ms-[20%] w-[24px] h-[24px]'/>
                  </div>
                  <div className='lg:text-lg'>
                    <p className='p-3 bg-white text-orange-600 w-[250px] sm:w-[400px] rounded-md'>Home</p>
                    <p className='p-3'>Comics</p>
                    <p className='p-3'>My Comics</p>
                    <p className='p-3'>Favorites</p> 
                    <p className='p-3'>Logout</p> 
                  </div>
                </div>
              </div>)
            }
            <img src="/logoDos.png" className="hidden md:block w-[193px] h-[65px] shrink-0"/>
            <img src="/logoMovile.png" className="md:hidden w-[35px] h-[35px] shrink-0"/>
            </div>
    </nav>
  )
}
