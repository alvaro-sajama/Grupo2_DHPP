import { AspirantLayout } from "./AspirantLayout";
import { ProfessionsLayout } from "./ProfessionsLayout";
import { Sidebar } from "./Sidebar";
import Banner from "../assets/imgs/HorneroBanner.png"
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-1 items-start w-full max-w-screen-xl min-h-0">
      <Sidebar />
      <main className="w-full h-full overflow-y-auto overflow-x-hidden border-l border-black dark:border-white">
        <section className="flex flex-col gap-3">
          <article className="flex flex-col md:flex-row justify-evenly items-center p-2 gap-3">
            <div className="flex flex-col w-52 p-3 gap-3 bg-white dark:bg-black rounded-lg">
              <p className="text-pretty text-center">Las empresas te estan esperando</p>
              <Link to="/login" className="bg-fuchsia-500 p-3 rounded-3xl text-center">Ingresar</Link>
              <Link to="/register" className="bg-indigo-600 text-white hover:bg-indigo-500 p-3 rounded-3xl text-center">Registrarse</Link>
            </div>
            <img src={ Banner } className="w-72" alt="Banner" />
          </article>
          <AspirantLayout />
          <ProfessionsLayout />
        </section>
      </main>
    </div>
  )
}
