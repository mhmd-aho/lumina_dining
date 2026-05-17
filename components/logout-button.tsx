'use client'
import { logoutAction } from "@/app/action";
import { useRouter } from "next/navigation";
export function LogoutButton(){
    const router = useRouter();
    const handleLogout =async ()=>{
        try{
            await logoutAction();
            router.push('/')  
        }catch(error){
            console.log(error);
        }
    }
    return(
        <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-white hover:text-primary rounded-md transition-all">
                Logout
        </button>
    )
}