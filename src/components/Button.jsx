export default function Button({title, href}) {

  function redirect(){
    console.log(href)
  }

  return (
    <button onClick={redirect} className= "bg-white text-orange-600 flex justify-center items-center gap-2.5 px-[55px] py-5 text-center text-xl font-medium leading-[95.187%] rounded-md w-60">{title}</button>
    )
}
