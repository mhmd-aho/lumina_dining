import { serverFetch } from "@/lib/server-fetch";
import { FavoriteType } from "@/lib/schemas";
import MenuCard from "@/components/menu-card";

export default async function Favorites() {
  let favorites: FavoriteType[] = [];
  
  try {
    const res = await serverFetch('/api/favorite/', { method: "GET" ,next:{tags:["favorite"]}});
    if (res.ok) {
      favorites = await res.json();
    }
  } catch (err) {
    console.error("Failed to fetch favorites:", err);
  }

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-6 py-10">
      <div className="mb-8">
        <h1 className="font-notoserif lg:text-3xl text-2xl text-slate-800">My Favorites</h1>
        <p className="text-slate-500 text-sm">Quickly access the dishes you love most.</p>
      </div>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((favorite: FavoriteType) => (
            <div key={favorite.id} className="transition-transform hover:scale-[1.02]">
              <MenuCard 
                item={favorite.menu_item} 
                isFavorited={favorite} 
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-xl">
          <p className="text-slate-500 text-sm">You haven't added any favorites yet.</p>
          <p className="text-slate-400 text-xs mt-1">Explore the menu to save your top picks!</p>
        </div>
      )}
    </div>
  );
}