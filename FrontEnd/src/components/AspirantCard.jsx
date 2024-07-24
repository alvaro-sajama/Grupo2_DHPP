import propType from 'prop-types'
import { Star } from "../assets/icons/Star"
import { MessageCircle } from '../assets/icons/MessageCircle'
import { Email } from '../assets/icons/Email'
import {CloudinaryImage} from '../services/cloudinary'

export function AspirantCard( { userData } ) {

  return(
    <section className='flex flex-col items-center w-full p-3 bg-white dark:bg-black shadow-md dark:shadow-fuchsia-700 rounded'>
  
      <div className='rounded-full w-40 overflow-hidden'>
        <CloudinaryImage publicID={ userData.imagen } />
      </div>
      <h1 className='text-xl'>{ userData.nombre } {userData.apellido}</h1>
      <h2 className='text-lg opacity-60'>{ userData.Profesion.nombre}</h2>
      <div className='flex justify-evenly w-full opacity-60'>
        <a href="#"><Star /></a>
        <a href={`tel:${userData.telefono}`}><MessageCircle /></a>
        <a href={`mailto:${userData.email}`}><Email /></a>
      </div>
    </section>
  )
}

AspirantCard.propTypes = {
  userData: propType.any
}