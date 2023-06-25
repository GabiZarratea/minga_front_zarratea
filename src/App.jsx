function App() {

  return (
    <div className="shrink-0 bg-cover bg-center bg-no-repeat bg-[url('/background-1.png')] md:bg-[url('/background-1-web.png')] flex flex-col min-h-screen w-full justify-between items-center">
      <nav className="flex w-[90%] justify-between items-center px-6 h-[10vh] lg:h-[10vh]">
        <img clasName= "w-[70px] h-[70px] lg:w-[77px] shrink-0" src="/Menu.svg"/>
        <img src="/logoMovile.png" className="w-[40px] h-[40px] shrink-0 lg:hidden"/>
        <img src="/logoDos.png" className="hidden lg:block lg:w-[193px] lg:h-[70px]" alt="" />          
      </nav>
      <main className ='inline-flex flex-col items-center lg:items-start lg:gap-[15px] justify-center lg:justify-center gap-[25px] min-h-[85vh] lg:min-h-[50vh] w-[full] lg:w-[90%] lg:px-6'>
        <p className="flex w-[388px] lg:w-[700px] flex-col text-white text-center text-[40px] lg:text-[64px] lg:items-start font-bold leading-[95.187%]">For the love of manga</p>
        <p className="text-white text-center lg:text-2xl text-xl leading-[95.187%]">Explore our varieties</p>
        <p className="hidden lg:block text-white text-base font-semibold leading-[95.187%]">#MingaLove❤️</p>
        <a href="#" className= "bg-white text-orange-600 flex w-[363px] lg:w-60 lg:p-4 justify-center items-center gap-2.5 px-[55px] py-5 text-center text-xl lg:text-2xl font-medium leading-[95.187%] rounded-md" >Sing In!</a>
      </main>
      <footer className='h-[10vh] lg:h-[40vh] inline-flex items-center justify-center space-x-6 lg:space-x-0 bg-white w-full'>
        <div className="lg:hidden inline-flex items-center justify-center space-x-6">
        <a href="#"><img src="/facebook-black.svg" className="w-10 h-[70px] mb-2 shrink-0"/></a>
        <a href="#"><img src="/twitter-black.svg" className="w-10 md:w-12 h-[70px] mb-2 shrink-0" /></a>
        <a href="#"><img src="/vimeo-black.svg" className="w-10 md:w-12 h-[70px] mb-2 shrink-0" /></a>
        <a href="#"><img src="youtube-black.svg" className="w-10 h-[30px] md:w-12 md:h-[70px] mb-2 shrink-0" /></a>
        </div>
        <div className="hidden lg:flex flex-row items-center justify-evenly bg-gradient-to-b from-orange-600 to-orange-400 w-[90%] h-[80%] rounded-md p-4">
          <img src="/back.svg" className="w-[26.5px] h-[26.5px] bg-[#efece5af] rounded-2xl" alt="Back" />
          <img src="/image1.png" className="w-[263px] h-[291px] flex-shrink: 0" alt="" />
          <img src="/image2.png" alt="" />
          <div className="inline-flex flex-col items-start gap-2.5 w-[365px] h-[85px]">
            <p className="text-white text-2xl font-medium leading-[95.187%]">Shonen</p>
            <p className="text-white text-sm leading-[95.187%]">Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>
          <img src="/next.svg" className="w-[26.5px] h-[26.5px] bg-[#efece5af] rounded-2xl" alt="Next" />
        </div>
      </footer>
    </div>
  )
}

export default App
