import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AspirantCard } from "./AspirantCard";

export function AspirantLayout() {
  const [aspirantes, setAspirantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchAspirantes = async () => {
      setLoading(true);
      setError(null);

      const query = new URLSearchParams(location.search);
      const profesion = query.get('profesion') || '';

      try {
        if(profesion){
          const response = await fetch(`http://localhost:3000/aspirantes/search?profesion=${profesion}`);
          const data = await response.json();
          setAspirantes(data);
        } else {
          const response = await fetch(`http://localhost:3000/aspirantes`);
          const data = await response.json();
          setAspirantes(data);
        }
      } catch (error) {
        console.error('Error fetching aspirantes:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAspirantes();
  }, [location.search]); // Ejecuta el efecto cada vez que la query en la URL cambie

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los aspirantes: {error.message}</p>;
  }

  return (
    <>
      <h1 className="pl-4 text-xl">Aspirantes</h1>
      <article className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-items-center gap-3 p-3">
        {aspirantes && aspirantes.length > 0 ? aspirantes.map(aspirante => (
          <AspirantCard key={aspirante.id} userData={aspirante} />
        )) : (
          <h6>No se encontraron aspirantes</h6>
        )}
      </article>
    </>
  );
}
