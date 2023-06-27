function App() {

  return (
    <div className="shrink-0 bg-cover bg-center bg-no-repeat bg-[url('/background-1.png')] md:bg-[url('/background-1-web.png')] flex flex-col min-h-screen w-full justify-between items-center">
      <nav className="w-full h-[10vh] lg:h-[60vh]">
        <div className="lg:hidden flex w-[90%] justify-between items-center m-3.5">
          <img clasName= "w-[70px] h-[70px] shrink-0" src="/Menu.svg"/>
          <img src="/logoMovile.png" className="w-[40px] h-[40px] shrink-0"/>
        </div>
        <div className="hidden lg:flex flex-col items-center justify-around">
        <div className="flex w-[90%] justify-between items-center p-6">
          <img src="/Menu.svg"/>
          <img src="/logoDos.png" className="w-[193px] h-[42px] shrink-0"/>
        </div>
        <div className ='text-white inline-flex flex-col items-start gap-[15px] justify-center mt-[5%] w-[90%] p-6'>
          <p className="flex text-[64px] font-bold leading-[95.187%]">For the love of manga</p>
          <p className="text-2xl leading-[95.187%]">Explore our varieties</p>
          <p className="font-semibold leading-[95.187%]">#MingaLove❤️</p>
          <a href="#" className= "bg-white text-orange-600 w-60 p-4 gap-2.5 text-center text-2xl font-medium leading-[95.187%] rounded-md" >Sing In!</a>
        </div>
        </div>
      </nav>
      <main className="w-full lg:bg-white lg:h-[40vh]">
        <div className ='lg:hidden flex flex-col items-center justify-center gap-[25px] min-h-[85vh]'>
        <p className="flex w-[70%] flex-col text-white text-center text-[40px] font-bold leading-[95.187%]">For the love of manga</p>
        <p className="text-white text-center text-xl leading-[95.187%]">Explore our varieties</p>
        <a href="#" className= "bg-white text-orange-600 flex w-[90%] justify-center items-center gap-2.5 px-[55px] py-5 text-center text-xl font-medium leading-[95.187%] rounded-md">Sing In!</a>
        </div>
        <div className="hidden lg:flex justify-center items-center w-full h-[100%]">
          <div className='flex text-white w-[90%] h-[75%] rounded-md bg-gradient-to-b from-orange-600 to-orange-500 justify-around gap-[15px] items-center p-2'>
            <img className='w-[3%] h-[13%] bg-[#f5d6abbd] rounded-2xl'src="/public/back.svg" alt="Back" />
            <img className='h-[120%] max-w-[230px]' src="/public/image1.png" />
            <img className='h-[120%] pb-[35px] rounded-md max-w-[170px]' src="/public/image2.png" />
            <div className='flex flex-col w-[40%] gap-4 ms-3'>
              <p className='font-medium text-[24px]'>Shonen</p>
              <p className='w-[90%] text-[14px]'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
            </div>
            <img className='w-[3%] h-[13%] bg-[#f5d6abbd] rounded-2xl'src="/public/next.svg" alt="Next" />
          </div>
        </div>
      </main>
      <footer className="h-[5vh] bg-white w-full">
        <div className="lg:hidden flex justify-around items-center mt-1">
          <img src="/facebook-black.svg" alt="Facebook Social" className="w-[35px]" />
          <img src="/twitter-black.svg" alt="Twitter Social" className="w-[35px]" />
          <img src="/vimeo-black.svg" alt="Vimeo Social" className="w-[35px]" />
          <img src="/youtube-black.svg" alt="Youtube Social" className="w-[35px]" />
        </div>
        <div className="hidden lg:flex flex-col w-full items-center justify-between">
          <img src="/footer.png" className="h-[200px] w-full rounded-b-[50%]" />
          <div className="flex flex-row justify-around items-center w-full p-5">
            <div className="flex flex-row gap-10 font-medium text-lg">
            <p>Home</p>
            <p>Mangas</p>
            </div>
            <img src="/logoDos.png" className="h-[70px]" />
            <div className="flex flex-col">
            <div className="flex justify-around items-center mt-1">
              <img src="/facebook-black.svg" alt="Facebook Social" className="w-[30px]" />
              <img src="/twitter-black.svg" alt="Twitter Social" className="w-[30px]" />
              <img src="/vimeo-black.svg" alt="Vimeo Social" className="w-[30px]" />
              <img src="/youtube-black.svg" alt="Youtube Social" className="w-[30px]" />
            </div>
            <a href="#" className= "bg-orange-600 text-white flex px-[50px] py-5 text-center text-xl font-medium leading-[95.187%] rounded-md mt-2">Donate <img src="/heart.svg" className="ms-2"/></a>
            </div>
          </div>
          <img src="/line.png" className="w-[85%] h-[1px] bg-black mb-5" />
        </div>
      </footer>
    </div>
  )
}

export default App
