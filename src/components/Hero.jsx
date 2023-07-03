import {Link as Anchor} from 'react-router-dom'

export default function Hero() {
  return (
    <div>
      <div className ='lg:hidden flex flex-col items-center justify-center gap-[25px] min-h-screen  bg-cover bg-center bg-no-repeat bg-[url("/background-1.png")]'>
        <p className="flex w-[70%] flex-col text-white text-center text-[40px] font-bold leading-[95.187%]">For the love of manga</p>
        <p className="text-white text-center text-xl leading-[95.187%]">Explore our varieties</p>
        <Anchor to={'/signin'} className='bg-white text-orange-600 flex justify-center items-center gap-2.5 px-[55px] py-5 text-center text-xl font-medium leading-[95.187%] rounded-md w-60'> Sign In! </Anchor>
      </div>
      <div className ='hidden lg:block min-h-[60%] text-white bg-cover bg-center bg-no-repeat md:bg-[url("/background-1-web.png")]'>
          <div className="m-16 mt-[10%] items-start gap-[15px] p-6 inline-flex flex-col justify-center">
            <p className="flex text-[64px] font-bold leading-[95.187%]">For the love of manga</p>
            <p className="text-2xl leading-[95.187%]">Explore our varieties</p>
            <p className="font-semibold leading-[95.187%]">#MingaLove❤️</p>
            <Anchor to={'/signin'} className='bg-white text-orange-600 flex justify-center items-center gap-2.5 px-[55px] py-5 text-center text-xl font-medium leading-[95.187%] rounded-md w-60'> Sign In! </Anchor>
          </div>
      </div>
    </div>
  )
}