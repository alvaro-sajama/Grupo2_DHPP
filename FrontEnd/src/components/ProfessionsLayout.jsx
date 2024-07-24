import { useEffect, useState } from "react"

export function ProfessionsLayout() {

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
      <h1 className="pl-4 text-xl">Profesiones</h1>
      
      <article className="p-3 gap-1 grid">
      <h3 className="text-center rounded p-3 text-white bg-indigo-600">Listado de profesiones</h3>
        {profesiones && profesiones.length > 0 ? 
        profesiones.map(profesion => {
          return (<a href="#" key={profesion.id} 
            className="text-center rounded p-2 
            bg-white dark:bg-black hover:bg-gray-200 shadow-sm shadow-[#DA70D6]">
              {profesion.nombre}
              </a>)
        }) : 
        (<h6>No se encontraron profesiones</h6>)
        }
        
      </article>
    </>
  )
}