import Button from "./Button"

export default function Hero() {
  return (
    <div>
      <div className ='hidden bg-[url("/background-1-web.png")] bg-cover bg-no-repeat text-white lg:inline-flex flex-col items-start gap-[15px] justify-center h-[60vh] w-[100%] p-6'>
                <p className="flex text-[64px] font-bold leading-[95.187%]">For the love of manga</p>
                <p className="text-2xl leading-[95.187%]">Explore our varieties</p>
                <p className="font-semibold leading-[95.187%]">#MingaLove❤️</p>
                <Button title="Sign In!" href=""/>
            </div>
      <div className ='lg:hidden bg-[url("/background-1.png")] flex flex-col items-center justify-center gap-[25px] min-h-[85vh]'>
        <p className="flex w-[70%] flex-col text-white text-center text-[40px] font-bold leading-[95.187%]">For the love of manga</p>
        <p className="text-white text-center text-xl leading-[95.187%]">Explore our varieties</p>
        <Button title="Sign In!" href="" />
      </div>
    </div>
  )
}
