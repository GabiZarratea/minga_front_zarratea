import Button from "./Button"

export default function Hero() {
  return (
    <div>
      <div className ='lg:hidden flex flex-col items-center justify-center gap-[25px] min-h-[85vh]'>
        <p className="flex w-[70%] flex-col text-white text-center text-[40px] font-bold leading-[95.187%]">For the love of manga</p>
        <p className="text-white text-center text-xl leading-[95.187%]">Explore our varieties</p>
        <Button title="Sign In!" href="" />
      </div>
    </div>
  )
}
