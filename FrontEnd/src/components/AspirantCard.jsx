import propType from 'prop-types'
import foto1 from "../assets/imgs/foto1.jpg"
import { Star } from "../assets/icons/Star"
import { MessageCircle } from '../assets/icons/MessageCircle'
import { Email } from '../assets/icons/Email'

export function AspirantCard( { foto = 'userDefault.png' } ) {
  foto = foto1
  return(
    <section className='flex flex-col items-center w-full p-3 bg-white dark:bg-black shadow-md dark:shadow-fuchsia-700 rounded'>
      <img className='rounded-full w-40' src={ foto } alt={`imagen de `} />
      <h1 className='text-xl'>Nombre</h1>
      <h2 className='text-lg opacity-60'>Profesion</h2>
      <div className='flex justify-evenly w-full opacity-60'>
        <a href="#"><Star /></a>
        <a href="#"><MessageCircle /></a>
        <a href="#"><Email /></a>
      </div>
    </section>
  )
}

AspirantCard.propTypes = {
  foto: propType.string
}