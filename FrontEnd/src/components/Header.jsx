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

  return (
    <>
      <header className="flex items-center justify-between w-full max-w-screen-xl">
        <Link to={'/'}>
          <img className="w-16" src={logo} alt="logo digital house" />
        </Link>
        Header
        <button onClick={toggleDarkMode}>Dark Light</button>
        <Search />
      </header>
    </>
  );
}
