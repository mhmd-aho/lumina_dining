import Categories from "@/components/categories";
import Link from "next/link";
import { CategoryProvider } from "@/lib/context/categoryContext";
import MenuItemsDisplay from "@/components/menu-items-display";
import { serverFetch } from "@/lib/server-fetch";
export default async function Home() {
  let data
  try{
    const res = await serverFetch(`/api/favorite/`);
    data = await res.json();
    console.log(data);
  }catch(error){
    console.log(error);
  }
  return (
    <main>
      <section className="h-[calc(100vh-3.5rem)] bg-center bg-cover max-lg:flex  max-lg:flex-col max-lg:justify-end" style={{backgroundImage:"url('/landing-page-bg.jpg')"}}>
        <div className="w-full lg:w-1/2 lg:h-full h-1/3 px-2 lg:px-6 flex flex-col lg:justify-center items-start lg::gap-3 gap-1 lg:bg-linear-to-r bg-linear-to-t from-tertiary to-tertiary/0 ">
            <p className="text-secondary font-notoserif lg:text-2xl text-xl">EPICUREAN ARTISTRY</p>
            <h1 className="text-primary font-notoserif font-medium lg:text-6xl  text-3xl">A symphony of<br/>flavors.</h1>
            <Link href="/reservation/date" className="text-base bg-secondary text-white px-4 py-2 rounded">Make a Reservation</Link>
        </div>
      </section>
      <section className="min-h-[calc(100vh-3.5rem)] w-full flex flex-col items-center justify-center gap-8  bg-tertiary py-10">
        <p className="text-primary font-notoserif font-semibold sm:text-2xl text-xl">OUR MENU</p>
        <div className="flex-1 max-sm:flex-col w-full flex gap-8 lg:px-10 sm:px-6 px-4">
          <CategoryProvider>
            <Categories />
            <MenuItemsDisplay favoritedItems={data} />
          </CategoryProvider>
        </div>
      </section>
    </main>
  );
}
