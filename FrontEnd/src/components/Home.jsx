import { AspirantLayout } from "./AspirantLayout";
import { ProfessionsLayout } from "./ProfessionsLayout";
import { Sidebar } from "./Sidebar";

export function Home() {
  return (
    <div className="flex flex-1 items-start w-full max-w-screen-xl ">
      <Sidebar />
      <main className="w-full">
        <section className="flex flex-col gap-3">
          <AspirantLayout />
          <ProfessionsLayout />
        </section>
      </main>
    </div>
  )
}
