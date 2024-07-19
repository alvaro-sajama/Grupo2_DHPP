import { AspirantCard } from "./AspirantCard";

export function AspirantLayout() {
  return (
    <>
      <h1 className="pl-4 text-xl">Aspirantes</h1>
      <article className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-items-center gap-3 p-3">
        <AspirantCard />
        <AspirantCard />
        <AspirantCard />
      </article>
    </>
  )
}