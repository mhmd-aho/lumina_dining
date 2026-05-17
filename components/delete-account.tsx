'use client'
import { deleteUserAction } from "@/app/action";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function DeleteAccountButton(){
    const [popup, setPopup] = useState(false);
    const [password, setPassword] = useState("");
    const router = useRouter();
    
    useEffect(()=>{
        if(popup){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
    },[popup])

    async function deleteAccountAction(){
        const res = await deleteUserAction(password);
        if(res.success){
            console.log("success")
            router.push("/")
            setPopup(false)
        }else{
            console.log("failed")
        }
    }
    
    return(
        <>
            <button onClick={()=>{setPopup(!popup)}} className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-all">
                    Delete Account
            </button>
            {popup && ( 
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in">
                    
                    <div className="bg-tertiary border border-neutral/10 p-6 shadow-2xl rounded-xl flex flex-col gap-4 max-w-sm w-full transform scale-100 transition-transform duration-200">
                        
                        <div className="flex flex-col gap-1">
                            <h1 className="font-notoserif text-primary text-xl font-bold tracking-tight">
                                Delete Account
                            </h1>
                            <p className="text-xs text-neutral/70 leading-relaxed">
                                This action is permanent. Please enter your password to confirm you want to delete your account.
                            </p>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-primary/80">Password</label>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                className="w-full p-2.5 text-sm bg-transparent border border-neutral/30 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-red-500/20 transition-all text-primary" 
                            />
                        </div>
                        <div className="flex gap-3 mt-2">
                            <button 
                                onClick={() => setPopup(false)} 
                                className="px-4 py-2 text-sm font-medium bg-neutral/10 hover:bg-neutral/20 text-primary flex-1 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={deleteAccountAction} 
                                className="px-4 py-2 text-sm font-medium bg-red-600 hover:bg-red-500 text-white flex-1 rounded-lg shadow-sm shadow-red-600/20 transition-colors"
                            >
                                Delete
                            </button>
                        </div>

                    </div>
                </div>
            )
        }   
        </>
    )
}