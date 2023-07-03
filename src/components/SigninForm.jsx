import React from 'react'
import ButtonOrange from '../components/ButtonOrange'

export default function SigninForm() {
  return (
    <div className='flex flex-wrap flex-col justify-center items-center w-[100%] lg:w-[50%]'>
        <img className='hidden lg:flex' src="/logoDos.png" alt="" />
        <h2 className='text-center text-[60px] flex-wrap font-bold'>Welcome <span className='text-orange-600'>back!</span></h2>
        <p className='text-center text-[20px] flex-wrap font-bold'>Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
        <form className='flex flex-col justify-center items-center gap-[30px] m-[50px_10px]' action="">
            <label htmlFor="Email">Email</label>
            <input className='border-orange-600 border-4' type="email" name="Email" id="Email" />
            <label htmlFor="Password">Password</label>
            <input className='border-orange-600 border-4' type="password" name="Password" id="Password" />
            <ButtonOrange title="Sign In" href="" />
            <ButtonOrange title="Sign In with Google" href="" />
        </form>
        <p className='text-[20px] font-bold'>you don't have an account yet? <a className='text-orange-600' href="">Sign up</a></p>
        <p className='text-[20px] font-bold'>Go back to <a className='text-orange-600' href="">home page</a></p>
        
    </div>
  )
}
