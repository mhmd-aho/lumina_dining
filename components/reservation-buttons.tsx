"use client"
import { deleteReservation } from "@/app/action";
import Link from "next/link";
export default function ReservationButtons({id}: {id: number}) {
    return(
        <div className="w-full flex items-center justify-end gap-2">
            <button onClick={()=>deleteReservation(id)} className="lg:px-3 px-2 py-1 lg:text-sm text-xs border-2 border-primary text-primary">CANCEL</button>
            <Link href={`/profile/update/reservation/${id}`} className="lg:px-3 px-2 py-1 lg:text-sm text-xs bg-primary text-tertiary">MODIFY</Link>
        </div>
    )
}