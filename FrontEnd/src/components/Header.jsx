import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../assets/icons/Search";
import logo from "../assets/imgs/logo-dh.png";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      
    } else {
      document.documentElement.classList.remove('dark');
    }

  };

  const [display, setDisplay] = useState('hidden')

  const toggledisplay = () => {
    display === 'hidden' ? setDisplay('grid') : setDisplay('hidden')
  }

  return (
    <>
      <header className="flex items-center justify-between w-full max-w-screen-xl">
        <Link to={'/'}>
          <img className="w-16" src={logo} alt="logo digital house" />
        </Link>
        <button onClick={toggleDarkMode}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>

        </button>


        <button onClick={toggledisplay}>Login</button>
        <div className={ `absolute ${display} place-items-center inset-0 bg-black bg-opacity-50`}>
          <div className="z-10 opacity-100 rounded-md backdrop-blur-xl border border-gray-500 flex">
            <div onClick={toggledisplay}>
              <button className="flex w-full justify-start rounded-m pt-4 pl-4  ">
                <p className="bg-black  text-white rounded hover:bg-pink-600 px-3 py-1.5 ">X</p>
              </button> 
             </div>  
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-20 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <img
                    alt="Your Company"
                    src="./src/assets/imgs/LogoG2.png"
                    className="mx-auto h-12 w-12  w-auto"
                  />
                  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
                    Iniciar sesión
                  </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-white-900">
                        Email 
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-white-900">
                          Contraseña
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          autoComplete="current-password"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="text-sm text-center mt-5 ">
                          <a href="#" className="font-semibold text-white-100 hover:text-pink-600">
                          ¿Olvidado Su Contraseña?
                          </a>
                        </div>
                  <p className="mt-3 text-center text-sm text-white-100">
                    ¿No tiene cuenta?{' '}
                    <a href="#" className="font-semibold leading-6 text-white-100 hover:text-pink-600">
                      Registrarse
                    </a>
                  </p>
                </div>
              </div>
              <div className="relative">
              <img
              src="./src/assets/imgs/imgLogin.jpg"
              alt="img"
              class="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
              />
              </div>
          </div>
        </div>

        <Search />
      </header>
    </>
  );
}
