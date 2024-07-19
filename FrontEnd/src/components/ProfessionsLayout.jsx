export function ProfessionsLayout() {

  return (
    <>
      <h1 className="pl-4 text-xl">Listado de Profesiones</h1>
      <article className="p-3 gap-1 grid grid-cols-[repeat(auto-fit,minmax(310px_,1fr))]">
        <section className="text-center rounded p-2 bg-white dark:bg-black shadow-sm shadow-[#DA70D6]">
          Profession
        </section>
        <section className="text-center rounded p-2 bg-white dark:bg-black shadow-sm shadow-fuchsia-600">
          Profession
        </section>
        <section className="text-center rounded p-2 bg-white dark:bg-black shadow-sm shadow-fuchsia-500">
          Profession
        </section>
        <section className="text-center rounded p-2 bg-white dark:bg-black shadow-sm shadow-fuchsia-400">
          Profession
        </section>
      </article>
    </>
  )
}