'use client'
import { logoutAction } from "@/app/action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export function LogoutButton(){
    const router = useRouter();
    const handleLogout =async ()=>{
        try{
            await logoutAction();
            toast.success('logged out successfully')
            router.push('/')  
        }catch(error){
            toast.error(error as string)
        }
    }
    return(
        <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-white hover:text-primary rounded-md transition-all">
                Logout
        </button>
    )
}