import React from 'react'
import Arrow from './Arrow'

export default function Carousel() {

    let left = "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    let right = "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"

    return (
    <div className="hidden lg:flex justify-center items-center w-full h-[100%]">
        <div className='flex text-white w-[90%] h-[75%] rounded-md bg-gradient-to-b from-orange-600 to-orange-500 justify-around gap-[15px] items-center p-2'>
            <Arrow icon = {left} />
            <img className='h-[120%] max-w-[230px]' src="/image1.png" />
            <img className='h-[120%] pb-[35px] rounded-md max-w-[170px]' src="/image2.png" />
            <div className='flex flex-col w-[40%] gap-4 ms-3'>
                <p className='font-medium text-[24px]'>Shonen</p>
                <p className='w-[90%] text-[14px]'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
            </div>
            <Arrow icon = {right} />
        </div>
    </div>
  )
}
