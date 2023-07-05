import React, { useState } from 'react';
import { Link as Anchor, useNavigate } from 'react-router-dom';
import { api, apiUrl, endpoints } from '../utils/api'
import Swal from "sweetalert2"

export default function NavBar() {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = () => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    const photo = localStorage.getItem('photo')
    return token && user
  }

  const signout = async () => {
    const token = localStorage.getItem('token');
    const headers = { headers: { 'Authorization': `Bearer ${token}` } }

    try {
      await api.post(apiUrl + endpoints.signout, null, headers)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logout successful!',
        showConfirmButton: false,
        timer: 1500
      })

      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setDisplay(false); // Cerrar el menú al hacer logout
      navigate('/')
      window.location.reload()
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to sign out!',
      })
    }
  }

  return (
    <nav className="w-full text-white absolute flex flex-col items-center justify-around">
      <div className="flex w-[90%] justify-between items-center p-6">
        <img src="/Menu.svg" onClick={() => setDisplay(!display)} />
        {display && (
          <div className="drawer sm:flex text-center sm:text-start min-w-[100%] sm:min-w-[410px] h-[100vh] flex-col sm:items-start gap-[147px] p-6 bg-gradient-to-b from-orange-600 to-orange-500 fixed top-0 left-0 shadow-2xl">
            <div className="flex h-[525px] flex-col items-center sm:items-start gap-8 self-stretch">
              {isLoggedIn() ? (
                <div className="flex flex-row items-center text-center lg:justify-between sm:w-[400px] w-[250px]">
                  <img src={localStorage.getItem('photo')} className="w-[50px] mb-2 sm:m-0 rounded-full" />
                  <div className="flex flex-col ms-3">
                    <p className="text-[16px]">{localStorage.getItem('user')}</p>
                  </div>
                    <img src="/filled.png" onClick={() => setDisplay(!display)} className="hidden sm:block ms-[20%] w-[24px] h-[24px]" />
                  </div>
              ) : <div className="w-11/12 flex justify-end items-center" onClick={() => setDisplay(!display)}>
                    <svg className="w-12 p-1 text-white border-white border-2 hover:bg-[#ff7b00] rounded-lg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div> 
              }
 
              <div className="lg:text-lg flex flex-col">
                { isLoggedIn() ? null : ( <Anchor to={'/'} className="p-3 text-lg hover:bg-white hover:text-orange-600 rounded-md w-[300px]">Home</Anchor> ) }
                { isLoggedIn() ? null : ( <Anchor to={'/signin'} className="p-3 text-lg hover:bg-white hover:text-orange-600 rounded-md w-[300px]">Log In</Anchor> ) }
                { isLoggedIn() ? null : ( <Anchor to={'/register'} className="p-3 text-lg hover:bg-white hover:text-orange-600 rounded-md w-[300px]">Register</Anchor> ) }
                { isLoggedIn() ? ( <Anchor className="p-3 text-lg hover:bg-white hover:text-orange-600 rounded-md w-[300px]">Comics</Anchor> ) : null }
                { isLoggedIn() ? ( <Anchor className="p-3 text-lg hover:bg-white hover:text-orange-600 rounded-md w-[300px]">My Comics</Anchor> ) : null }
                { isLoggedIn() ? ( <Anchor className="p-3 text-lg hover:bg-white hover:text-orange-600 rounded-md w-[300px]">Favorites</Anchor> ) : null }
                { isLoggedIn() ? ( <Anchor onClick={signout} className="p-3 text-lg hover:bg-white hover:text-orange-600 rounded-md w-[300px]">Log Out</Anchor> ) : null }
              </div>
            </div>
          </div>
        )}
        <img src="/logoDos.png" className="hidden md:block w-[193px] h-[65px] shrink-0" />
        <img src="/logoMovile.png" className="md:hidden w-[35px] h-[35px] shrink-0" />
      </div>
    </nav>
  );
}