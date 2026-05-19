"use client"
import MenuCard from "./menu-card";
import { useState, useEffect } from "react";
import { useCategory } from "@/lib/context/categoryContext";
import { MenuItemType, FavoriteType, UserType } from "@/lib/schemas";
import { toast } from "sonner";
export default function MenuItemsDisplay({user,favoritedItems}: {user: UserType,favoritedItems: FavoriteType[] | undefined}){
    const {selectedCategory} = useCategory();
    const [menuItems,setMenuItems] = useState<MenuItemType[]>([]);
    useEffect(() =>{
      const fetchMenuItems = async () =>{
        try{
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/menu/?category=${selectedCategory}`)
          if(!res.ok){
            throw new Error('Failed to fetch menu items');
          }
          const data = await res.json()
          setMenuItems(data);
        }catch{
          toast.error('Failed to fetch menu items');
        }
      }
      fetchMenuItems();
    },[selectedCategory])
    return(
         <div className="h-full flex-1 grid lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-8">
                      {menuItems.map((item) => {
                        if(user === null || typeof user === 'string'){
                            return <MenuCard user={user} key={item.id} item={item}/>
                        }
                        const isFavorited = favoritedItems.find((favorite) => favorite.menu_item.id === item.id);
                        return <MenuCard user={user} key={item.id} item={item} isFavorited={isFavorited}/>
                      })}
        </div>
    )
}