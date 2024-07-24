import { AspirantLayout } from "./AspirantLayout";
import { Sidebar } from "./Sidebar";

export function AspirantPage() {
  return ( 
    <>
      <div className="flex flex-1 items-start w-full max-w-screen-xl min-h-0">
        <Sidebar />
        <main className="w-full h-full overflow-y-auto overflow-x-hidden border-l border-black dark:border-white">
          <AspirantLayout />
        </main>
      </div>
    </>
  )
}