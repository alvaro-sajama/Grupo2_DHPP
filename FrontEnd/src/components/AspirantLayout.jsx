import { useEffect, useState } from "react";
import { AspirantCard } from "./AspirantCard";

export function AspirantLayout() {
  
  const [aspirantes, setAspirantes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/aspirantes')
      .then(res => res.json())
      .then(data => {
        setAspirantes(data);
      })
      .catch(error => {
        console.error('Error fetching aspirantes:', error);
      });
  }, []);

  return (
    <>
      <h1 className="pl-4 text-xl">Aspirantes</h1>
      <article className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-items-center gap-3 p-3">
        {aspirantes && aspirantes.length > 0 ? aspirantes.map( aspirante => {
          return (<AspirantCard key={aspirante.id} userData={aspirante}/>)
        }):( 
        <h6>No se encontraron aspirantes</h6>
        )}
      </article>
    </>
  )
}