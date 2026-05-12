"use client"
import { useState } from "react"
import { deleteReservation } from "@/app/action";
export default function AlertDialog({id}: {id: number}){
    const [open, setOpen] = useState(false)
    return(
        <div className="w-fit h-fit">
            <button onClick={()=>setOpen(true)} className="lg:px-3 px-2 py-1 lg:text-sm text-xs border-2 border-primary text-primary">CANCEL</button>
            {open && 
                <div className="absolute z-50 inset-0 bg-black/90 flex justify-center items-center">
                    <div className="flex flex-col bg-tertiary sm:w-96 w-72 h-fit p-2 rounded">
                        <p className="text-primary sm:text-xl text-base font-notoserif">Are you sure you want to cancel your reservation?</p>
                        <div className="flex justify-end gap-2">
                            <button onClick={()=>setOpen(false)} className="lg:px-3 px-2 py-1 lg:text-sm text-xs border border-primary text-primary">No</button>
                            <button onClick={()=>{deleteReservation(id); setOpen(false)}} className="lg:px-3 px-2 py-1 lg:text-sm text-xs border-2 border-primary text-tertiary bg-primary">Yes</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}