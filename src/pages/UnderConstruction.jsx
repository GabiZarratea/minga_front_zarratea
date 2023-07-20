import React from 'react'

function UnderConstruction() {
  return (
    <div className='flex flex-col gap-[20px] h-screen w-screen justify-center items-center'>
        <img className='h-[15rem] w-[15rem]' src="/underconstruction.png" alt="" />
        <h1 className='text-[50px] text-orange-500 font-bold'>THIS PAGE IS UNDER CONSTRUCTION</h1>
        <p className='text-[20px] text-black font-bold'>RETURN IN A FEW DAYS AND THIS WILL BE AMAZING </p>
    </div>
  )
}

export default UnderConstruction
