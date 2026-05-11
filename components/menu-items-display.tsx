"use client"
import MenuCard from "./menu-card";
import { useState, useEffect } from "react";
import { useCategory } from "@/lib/context/categoryContext";
import { MenuItemType } from "@/lib/schemas";
export default function MenuItemsDisplay(){
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
        }catch(error){
          console.log(error);
        }
      }
      fetchMenuItems();
      console.log(menuItems)
    },[selectedCategory])
    return(
         <div className="h-full flex-1 grid lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-8">
                      {menuItems.map((item) => (
                        <MenuCard key={item.id} item={item} />
                      ))}
        </div>
    )
}