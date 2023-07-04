import React, { useState } from 'react';
import { Link as Anchor, useNavigate } from 'react-router-dom';
import { api, apiUrl, endpoints } from '../utils/api'

export default function NavBar() {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    const photo = localStorage.getItem('photo')
    return token && user;
  };

  const signout = async () => {
    const token = localStorage.getItem('token');
    const headers = { headers: { 'Authorization': `Bearer ${token}` } };

    try {
      await api.post(apiUrl + endpoints.signout, null, headers);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setDisplay(false); // Cerrar el menú al hacer logout
      navigate('/');
    } catch (error) {
      alert('¡Error al cerrar sesión!');
    }
  };

  return (
    <nav className="w-full text-white absolute flex flex-col items-center justify-around">
      <div className="flex w-[90%] justify-between items-center p-6">
        <img src="/Menu.svg" onClick={() => setDisplay(!display)} />
        {display && (
          <div className="drawer sm:flex text-center sm:text-start min-w-[100%] sm:min-w-[410px] h-[100vh] flex-col sm:items-start gap-[147px] p-6 bg-gradient-to-b from-orange-600 to-orange-500 fixed top-0 left-0 shadow-2xl">
            <div className="flex h-[525px] flex-col items-center sm:items-start gap-8 self-stretch">
              <div className="flex w-full justify-end">
                <img
                  src="/filled.png"
                  onClick={() => setDisplay(!display)}
                  className="sm:hidden flex justify-end ms-[20%] h-[24px]"
                />
                <img
                  src="/filled.png"
                  onClick={() => setDisplay(!display)}
                  className="hidden sm:block ms-[20%] w-[24px] h-[24px] cursor-pointer"
                />
              </div>
              {isLoggedIn() ? (
                <div className="flex flex-row items-center text-center lg:justify-between sm:w-[400px] w-[250px]">
                  <img src={localStorage.getItem('photo')} className="w-[50px] mb-2 sm:m-0" />
                  <div className="flex flex-col ms-3">
                    <p className="text-[16px]">{localStorage.getItem('user')}</p>
                  </div>
                  <img
                    src="/filled.png"
                    onClick={() => setDisplay(!display)}
                    className="hidden sm:block ms-[20%] w-[24px] h-[24px]"
                  />
                </div>
              ) : (
                <Anchor to={'/signin'} className="p-3 hover:bg-white hover:text-orange-600 rounded-md w-[300px]">
                  Login
                </Anchor>
              )}
              <div className="lg:text-lg flex flex-col">
                <Anchor to={'/'} className="p-3 hover:bg-white hover:text-orange-600 rounded-md w-[300px]">
                  Home
                </Anchor>
                <Anchor to={'/register'} className="p-3 hover:bg-white hover:text-orange-600 rounded-md w-[300px]">
                  Register
                </Anchor>
                <Anchor className="p-3 hover:bg-white hover:text-orange-600 rounded-md w-[300px]">Comics</Anchor>
                <Anchor className="p-3 hover:bg-white hover:text-orange-600 rounded-md w-[300px]">My Comics</Anchor>
                <Anchor className="p-3 hover:bg-white hover:text-orange-600 rounded-md w-[300px]">Favorites</Anchor>
                {isLoggedIn() ? (
                  <button onClick={signout} className="p-3 hover:bg-white hover:text-orange-600 rounded-md w-[300px]">
                    Log Out
                  </button>
                ) : null}
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