import MenuCard from "@/components/menu-card";
export default function Home() {
  return (
    <main>
      <section className="h-[calc(100dvh-3.5rem)] bg-center bg-cover max-sm:flex  max-sm:flex-col max-sm:justify-end" style={{backgroundImage:"url('/landing-page-bg.jpg')"}}>
      <div className="w-full sm:w-1/2 sm:h-full h-1/4 px-2 sm:px-6 flex flex-col sm:justify-center items-start sm:gap-3 gap-1 sm:bg-linear-to-r bg-linear-to-t from-tertiary to-tertiary/0">

          <p className="text-secondary font-notoserif sm:text-2xl text-xl">EPICUREAN ARTISTRY</p>
          <h1 className="text-primary font-notoserif font-medium sm:text-6xl text-3xl">A symphony of<br/>flavors.</h1>
      </div>
      </section>
      <section className="min-h-[calc(100dvh-3.5rem)] w-full flex flex-col items-center justify-center gap-8  bg-tertiary py-10">
        <p className="text-primary font-notoserif font-semibold sm:text-2xl text-xl">OUR MENU</p>
        <div className="flex-1 max-sm:flex-col w-full flex gap-8 sm:px-10 px-6">
          <div className="sm:h-full h-12 sm:w-fit w-full flex sm:flex-col  sm:items-start items-center justify-center gap-4 text-primary font-notoserif">
            <button className="sm:border-l-2 max-sm:border-b-2 px-2 border-secondary text-secondary">Starters</button>
            <button className="sm:px-3 px-2">Mains</button>
            <button className="sm:px-3 px-2">Desserts</button>
          </div>
          <div className="h-full flex-1 grid sm:grid-cols-3 grid-cols-1 sm:gap-20 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <MenuCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
