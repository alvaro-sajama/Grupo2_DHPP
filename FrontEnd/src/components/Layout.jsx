import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export function Layout() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[size:6rem_4rem] transition">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_clamp(24px,_45vw,_600px)_at_75%_30%,#DA70D6,transparent)]"></div>
      </div>
      <Header />
      <Outlet></Outlet>
      <footer className='w-full max-w-screen-xl'>Footer</footer>
    </>
  )
}