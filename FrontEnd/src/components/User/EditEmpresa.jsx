import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


export function EditEmpresa() {
  return (
    <>
    <br />
    
    <div className="bg-[#e5e7eb] isolate px-10 py-10 sm:py-10 lg:px-10 lg:py-10  overflow-y-auto">
        
       <div>
        <h1 className="text-2xl font-bold text-gray-700 sm:text-2xl">Registrarse</h1>
      </div>
          <form>
                <div className="space-y-1">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Perfil</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                    Esta información se mostrará públicamente, así que tenga cuidado con lo que comparte.
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="nombreEmpresa" className="block text-sm font-medium leading-6 text-gray-900">    
                          Nombre de Empresa
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              id="nombreEmpresa"
                              name="nombreEmpresa"
                              type="text"
                              placeholder="Openix"
                              autoComplete="nombreEmpresa"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-12"
                            />
                          </div>
                        </div>


                        <label htmlFor="rubro" className="block text-sm font-medium leading-6 text-gray-900">
                          Rubro
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              id="rubro"
                              name="rubro"
                              type="text"
                              placeholder="Informática"
                              autoComplete="rubro"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-12"
                            />
                          </div>
                        </div>

                        <label htmlFor="servicios" className="block text-sm font-medium leading-6 text-gray-900">
                          Servicios que ofrecen
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              id="servicios"
                              name="servicios"
                              type="text"
                              placeholder="Servicios y tecnologías de la información"
                              autoComplete="servicios"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-12"
                            />
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
                        <label htmlFor="cantidadEmpleados" className="block text-sm font-medium leading-6 text-gray-900">
                            Canridad de empleados   
                        </label>
                        <div className="mt-2">
                          <input
                            id="cantidadEmpleados"
                            name="cantidadEmpleados"
                            type="number"
                            min="1" 
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
                                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                >
                                <option>US</option>
                                <option>CA</option>
                                <option>EU</option>
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

                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                          Dirección
                        </label>
                        <div className="mt-2">
                          <input
                            id="street-address"
                            name="street-address"
                            type="text"
                            autoComplete="street-address"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                          Ciudad
                        </label>
                        <div className="mt-2">
                          <input
                            id="city"
                            name="city"
                            type="text"
                            autoComplete="address-level2"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                          Provincia
                        </label>
                        <div className="mt-2">
                          <input
                            id="region"
                            name="region"
                            type="text"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                          CP / Código Postal
                        </label>
                        <div className="mt-2">
                          <input
                            id="postal-code"
                            name="postal-code"
                            type="text"
                            autoComplete="postal-code"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button type="button" 
                   className="rounded-md relative h-12 w-60 bg-black x-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                     className="rounded-md relative h-12 w-60 bg-black x-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Guardar
                  </button>
                </div>
                  </form>
     
      </div>     
    </>
  )
}