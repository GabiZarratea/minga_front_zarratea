import React from 'react'
import { Link as Anchor } from 'react-router-dom';

export default function Newrole() {

  return (
    <div className='w-[100%] h-full flex flex-row'>
        <div className='flex flex-col justify-center items-center w-[100%] lg:w-[50%] h-screen'>
            <h2 className='flex text-orange-500 text-2xl'>Change role to</h2>
            <Anchor className='flex flex-col my-[30px] justify-center items-center w-[100%] text-orange-500' to={'/underConstruction'}><div className='flex flex-col my-[30px] justify-center items-center w-[100%] lg:w-[50%] text-orange-500'>
                <h3 className='text-2xl font-bold'>Join as an Author!</h3>
                <p className=' text-2xl'>I'm a reader writting a manga</p>
            </div></Anchor>
            <Anchor className='flex flex-col my-[30px] justify-center items-center w-[100%] text-orange-500' to={'/underConstruction'}><div className='flex flex-col my-[30px] justify-center items-center w-[100%] lg:w-[50%] text-orange-500'>
                <h3 className='text-2xl font-bold'>Join as an Company!</h3>
                <p className='text-2xl'>I’m a company and I want to publish my comics</p>
            </div></Anchor>

        </div>
        <img className='hidden lg:flex lg:w-[50%] h-screen object-cover' src="/bg-newrole.png" alt="" />
    </div>
  )
}
