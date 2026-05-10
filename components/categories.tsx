"use client";
import { useState, useEffect } from "react";
import { CategoryType } from "@/lib/sechams";
import { useCategory } from "@/lib/context/categoryContext";
export default function Categories (){
    const {setSelectedCategory,selectedCategory} = useCategory();
    const [categories,setCategories] = useState<CategoryType[]>([]);
    useEffect(()=>{
        const fetchCategories = async () =>{
            try{
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/category/`)
                if(!res.ok){
                    throw new Error('Failed to fetch categories')
                }
                setCategories(await res.json());
            }catch(error){
                console.log(error);
            }
        }
        fetchCategories();
    },[])
    return(
        <div className="sm:h-full h-12 sm:w-fit flex sm:flex-col  sm:items-start items-center gap-4 text-primary font-notoserif max-sm:overflow-x-scroll">
            {categories.map((category:CategoryType) => (
                <button onClick={() => setSelectedCategory(category.id)} key={category.id} value={category.id} className={`sm:px-2 border-secondary max-sm:text-sm whitespace-nowrap ${selectedCategory === category.id ? 'text-secondary sm:border-l-2 max-sm:border-b-2' : 'text-primary'}`}>{category.name}</button>
            ))}
        </div>
    )
}