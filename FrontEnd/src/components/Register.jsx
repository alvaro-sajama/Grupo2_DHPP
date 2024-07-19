export function Register() {
  return (
    <>
    <br />
    <div className="isolate bg-[#e5e7eb] px-6 py-24 sm:py-32 lg:px-16 lg:py-10">
        
       <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Registrarse</h1>
      </div>
      <form  action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900">Nombre</label>
            <input type="text" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>

          <div>
            <label className="block text-sm font-semibold leading-6 text-gray-900" htmlFor="">Email</label>
            <input type="text" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>

          <div>  
            <label className="block text-sm font-semibold leading-6 text-gray-900" htmlFor="">Rubro</label>
            <input type="" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>

            <div>
              <label className="block text-sm font-semibold leading-6 text-gray-900" htmlFor="">Perfil de linkedin</label>
              <input type="" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
          <br />
          <div className="sm:col-span-2">
            <div>  
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Imagen</label>
              <div className="mt-2.5">
              <image className="h-16 w-16 rounded-full" src="" alt=""/>
                <input type="text" id="imagen" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          <br />
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Numero de Teléfono</label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">Country</label>
                <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                  <option>AR</option>
                  <option>CH</option>
                  <option>UR</option>
                  <option>PA</option>
                  <option>BO</option>
                  <option>BZ</option>
                  <option>US</option>
                </select>
                <svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path  fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </div>
              <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
          
            </div>
          </div>
          <br />
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              
              <button type="button" className="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                <span className="sr-only">Agree to policies</span>
              
                <span aria-hidden="true" className="h-4 w-4 translate-x-0 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
              </button>
            </div>
            <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
              By selecting this, you agree to our
              <a href="#" className="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
            </label>
            
          </div>
          
          <div className="mt-10">
              <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
          </div>
      </form>
      </div>     
    </>
  )
}