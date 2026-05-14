'use client'
import { MenuItemType } from "@/lib/schemas";
import { Heart } from "lucide-react";
import { favoriteAction,unfavoriteAction } from "@/app/action";
import { FavoriteType } from "@/lib/schemas";
export default function MenuCard({item, isFavorited}: {item: MenuItemType, isFavorited: FavoriteType | undefined}) {
    
    return (
        <div className="w-full h-96 col-span-1 shadow relative group">
            <div className="w-full h-2/3 relative overflow-hidden">
                <img className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-300" src={item.image} alt={item.name}/>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ">
                        {!isFavorited?
                        <button onClick={()=> favoriteAction(item.id)} className="hover:scale-110 transition-all duration-300">
                            <Heart className="size-10"/>
                        </button>
                        :
                        <button onClick={()=> unfavoriteAction(isFavorited.id)} className="hover:scale-110 transition-all duration-200">
                            <Heart className="size-10 fill-secondary text-secondary"/>
                        </button>
                        }
                </div>
            </div>
            <div className="p-4 bg-white flex flex-col gap-4">
                <div className="flex justify-between">
                    <h1 className="font-notoserif text-primary text-2xl">{item.name}</h1>
                    <p className="text-secondary text-lg">$ {item.price}</p>
                </div>
                <p className="text-neutral text-sm">{item.description}</p>
            </div>
        </div>
    );
}   