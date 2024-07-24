'use client'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react';
export function Register() {

  const [profesiones, setProfesiones] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/profesiones')
     .then(res => res.json())
     .then(data => {
        setProfesiones(data);
      })
     .catch(error => {
        console.error('Error fecthing profesiones:', error);
      });
  },[]);


  return (
    <>
    <br />
    <div className=" overflow-y-auto isolate bg-[#e5e7eb] px-10 py-10 sm:py-10 lg:px-10 lg:py-10 ">
        
       <div>
        <h1 className="text-2xl font-bold text-gray-700 sm:text-2xl">Registrarse</h1>
      </div>
      <form method="POST" action="http://localhost:3000/aspirantes" encType="multipart/form-data">
                <div className="space-y-1">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Perfil</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                    Esta información se mostrará públicamente, así que tenga cuidado con lo que comparte.
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">    
                          Nombre de Usuario
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1  ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              id="username"
                              name="username"
                              type="text"
                              placeholder="janesmith"
                              autoComplete="username"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-12"
                            />
                          </div>
                        </div>


                        <label htmlFor="profesion" className="block text-sm font-medium leading-6 text-gray-900">
                          Profesión
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <select name="profesion" id="profesion">
                              <option value="">Seleccione una profesión</option>
                              {profesiones.map(profesion => {
                              return (<option key={profesion.id}>
                                {profesion.nombre}
                                </option>) })}
                            </select>
                          </div>
                        </div>
                      </div>

                     
                      <div className="col-span-full">
                        <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                          Foto
                        </label>
                        <div className="mt-2 flex items-center gap-x-3">
                          <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                          <button
                            type="button"
                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            Cambiar
                          </button>
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                          Foto de Portada
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                          <div className="text-center">
                            <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Subir Archivo</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                              </label>
                              <p className="pl-1">Cargue un archivo o arrastre y suelte.</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF hasta 10MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Informacion Personal</h2>
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                          Nombre
                        </label>
                        <div className="mt-2">
                          <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                          Apellido
                        </label>
                        <div className="mt-2">
                          <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            autoComplete="last-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                          DNI
                        </label>
                        <div className="mt-2">
                          <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            autoComplete="last-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="perfil-likedin" className="block text-sm font-medium leading-6 text-gray-900">
                          Perfil de Linkedin
                        </label>
                        <div className="mt-2">
                          <input
                            id="perfil-likedin"
                            name="perfil-likedin"
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                          Email
                        </label>
                        <div className="mt-2">
                          <input id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      
                      <div className="sm:col-span-3">
                        <label htmlFor="fecha-nacimiento" className="block text-sm font-medium leading-6 text-gray-900">
                          Fecha de Nacimeinto
                        </label>
                        <div className="mt-2">
                          <input
                            id="fecha-nacimiento"
                            name="fecha-nacimiento"
                            type="date"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>                      
                      <div className="sm:col-span-3">
                        <label htmlFor="genero" className="block text-sm font-medium leading-6 text-gray-900">Sexo</label>                  
                        <select id="genero" name='sexo' className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300">
                          <option value="" selected disabled>Selecciona tu género</option>
                          <option value="M">Masculino</option>
                          <option value="F">Femenino</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>

                      <div className="col-span-full">
                      <div className="sm:col-span-2">
                          <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                            Número de telefono
                          </label>
                          <div className="relative mt-2.5">
                            <div className="absolute inset-y-0 left-0 flex items-center">
                              <label htmlFor="country" className="sr-only">
                                Pais
                              </label>
                              <select
                                id="country"
                                name="country"
                                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                <option>AR</option>
                                <option>CH</option>
                                <option>UR</option>
                              </select>
                              <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                              />
                            </div>
                            <input
                              id="phone-number"
                              name="phone-number"
                              type="tel"
                              autoComplete="tel"
                              className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                      <button 
                        type="button" 
                        className="rounded-md relative h-12 w-60 bg-black x-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        CANCELAR
                      </button>
                      <button
                        type="submit"
                        className="rounded-md relative h-12 w-60 bg-black x-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        ENVIAR
                      </button>
                    </div>
                  </form>
     
      </div>     
    </>
  )
}