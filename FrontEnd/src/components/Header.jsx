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
        <button onClick={toggleDarkMode}>Dark Light</button>


        <button onClick={toggledisplay}>display</button>
        <div className={ `absolute ${display} place-items-center inset-0 bg-black bg-opacity-50`}>
          <div className="z-10 bg-white opacity-100">
            <div onClick={toggledisplay}>X</div>
            login
          </div>
        </div>

        <Search />
      </header>
    </>
  );
}
