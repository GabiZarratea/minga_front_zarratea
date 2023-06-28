export default function Button({title, href}) {

  function redirect(){
    console.log(href)
  }

  return (
    <button onClick={redirect} className= "bg-white text-orange-600 flex w-[90%] lg:w-60 lg:p-4 justify-center items-center gap-2.5 px-[55px] py-5 text-center text-xl font-medium leading-[95.187%] rounded-md">{title}</button>
    )
}
