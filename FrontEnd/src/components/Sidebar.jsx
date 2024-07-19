import { Briefcase } from "../assets/icons/Briefcase"
import { Building } from "../assets/icons/Building"
import { Clipboard } from "../assets/icons/Clipboard"
import { Message } from "../assets/icons/Message"
import { User } from "../assets/icons/User"
import { Link } from "react-router-dom"

export function Sidebar() {
  return (
    <>
      <aside className="w-60 hidden sm:block">
        <nav className="flex justify-center">
          <ul className="flex flex-col items-start gap-3 p-3">
            <li>
              <Link to="/#" className="flex">
                <Building /> Empresas
              </Link>
            </li>
            <li>
              <Link to="/#" className="flex">
                <User /> Aspirantes
              </Link>
            </li>
            <li>
              <Link to="/#" className="flex">
                <Briefcase /> Profesiones
              </Link>
            </li>
            <li>
              <Link to="/register" className="flex items-center">
                <Clipboard /> Postulate Aquí
              </Link>
            </li>
            <li>
              <Link to="/#" className="flex">
                <Message /> Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}