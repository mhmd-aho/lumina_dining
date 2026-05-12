"use client"
import Link from "next/link";
import AlertDialog from "./alert-dialog";
export default function ReservationButtons({id}: {id: number}) {
    return(
        <div className="w-full flex items-center justify-end gap-2">
            <AlertDialog id={id} />
            <Link href={`/profile/update/reservation/${id}`} className="lg:px-3 px-2 py-1 lg:text-sm text-xs bg-primary text-tertiary">MODIFY</Link>
        </div>
    )
}