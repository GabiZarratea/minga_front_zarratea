import { React, useRef } from 'react'
import { api, apiUrl, endpoints } from '../utils/api'
import { Link as Anchor , useNavigate} from "react-router-dom"

export default function SigninForm() {

    let navigate = useNavigate()

    let inputEmail = useRef("")
    let inputPassword = useRef("")

    async function handleFormSubmit(event){
        event.preventDefault()
        let datos = {
            email: inputEmail.current.value,
            password: inputPassword.current.value
        }
        console.log(datos)
        try {
            let { data } = await api.post(apiUrl + endpoints.sign_in, datos)
            await setUser(data.user)
            console.log(user)
            navigate('/')
        }
        catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className='flex flex-wrap flex-col justify-center items-center w-[100%] lg:w-[50%]'>
        <img className='hidden lg:flex w-60 p-6' src="/logoDos.png" alt="" />
        <p className="text-[#1F1F1F] text-center text-[32px] not-italic font-semibold leading-[normal] tracking-[1.6px]">Welcome <span className='text-orange-600'>back!</span></p>
            <p className="w-[80%] md:w-[50%] text-[rgba(31,31,31,0.75)] text-center text-xs not-italic font-semibold leading-[normal] tracking-[0.6px] mt-3">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
        <form onSubmit={handleFormSubmit} method="POST" className="w-full">
              <div className="w-full mt-8 mr-0 mb-0 ml-0 space-y-8 flex flex-col items-center">
                <div>
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 mr-0 mb-0 ml-2 not-italic font-normal leading-[normal] tracking-[0.6px] text-xs text-[color:var(--primary-two-design,#F97316)]">Email</p>
                  <input ref={inputEmail} placeholder="DragonballZ@Krowl.com" id="email" name="email" type="email" required className="border placeholder-gray-300 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"/>
                </div>
                <div>
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 mr-0 mb-0 ml-2 not-italic font-normal leading-[normal] tracking-[0.6px] text-xs text-[color:var(--primary-two-design,#F97316)]">Password</p>
                  <input ref={inputPassword} placeholder="Password" id="password" name="password" type="password" required className="border placeholder-gray-300 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                      rounded-[10px] border-solid border-[rgba(31,31,31,0.50)] w-[70vw] md:w-[30vw] h-12 shrink-0"/>
                </div>
                <button className="flex w-[70vw] md:w-[30vw] h-12 flex-col items-center justify-center shrink-0 bg-[color:var(--primary-two-design,#F97316)] rounded-[10px]">
                <Anchor onClick={handleFormSubmit} className="text-[#FAFCFC] text-center text-sm not-italic font-bold leading-[normal] tracking-[0.7px]">Sign In</Anchor>
                </button>
                <button className="w-[70vw] md:w-[30vw] h-12 shrink-0 border rounded-[10px] border-solid border-[#1F1F1F] flex justify-center items-center">
                  <img src="/google.png" className="w-6 h-6 shrink-0" />
                  <p className="ms-2 text-[#1F1F1F] text-center text-sm not-italic font-medium leading-[normal] tracking-[0.7px]">Sign in with Google</p>
                </button>
                <p className="text-[#1F1F1F] text-sm not-italic font-medium leading-[normal] tracking-[0.7px]">You don't have an account yet? <Anchor to={'/register'} className="text-[color:var(--primary-two-design,#F97316)]">Sign Up</Anchor></p>
                <p className="text-[#1F1F1F] text-sm not-italic font-medium leading-[normal] tracking-[0.7px]">Go back to <Anchor to={'/'} className="text-[color:var(--primary-two-design,#F97316)]">home page</Anchor></p>
              </div>
            </form> 
    </div>
  )
}
