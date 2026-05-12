'use client'
import { useState } from "react"
import { ReservetionType } from "@/lib/schemas";
import { updateReservation } from "@/app/action";
import { Clock, RectangleHorizontal, Users } from "lucide-react";
export default function UpdateForm({data}: {data: ReservetionType}){
    const originalDate = new Date(data.booking_time);
    const formatedDate = originalDate.toISOString().split('T')[0]
    const formattedTime = originalDate.toLocaleTimeString('en-GB',{
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
    const [date,setDate] = useState(formatedDate)
    const [time,setTime] = useState(formattedTime)
    const [guests,setGuests] = useState(data.guests)
    const [table,setTable] = useState(data.table)   
    const HandleSubmit = async(e: any) => {
        e.preventDefault();
        if(date === formatedDate && time === formattedTime && guests === data.guests && table === data.table){
            return;
        }
        const updatedData = {
            booking_time:date +"T"+ time,
            guests:guests,
            table:table
        }
        const res = await updateReservation(data.id, updatedData)
        if(res.success){
            console.log(res.data)
        }
    }
    return(
        <div className="w-full sm:w-2/3 lg:w-1/2 sm:h-fit h-[calc(100vh-3.5rem)] px-2 sm:border sm:rounded-lg sm:border-neutral p-2 lg:p-5 flex flex-col gap-4">
                <h1 className="font-notoserif text-primary lg:text-3xl text-xl">Update your reservation</h1>
                <form className="flex flex-col gap-5 ">
                    <div className="flex flex-col shadow p-2">
                        <h2 className="lg:text-2xl text-lg font-notoserif text-primary flex items-center gap-3"><Clock className="text-secondary lg:size-5 size-4"/>Date & Time</h2>
                        <div className="flex justify-between ">
                            <input className="text-primary lg:text-base text-sm px-2 py-1 border border-neutral" value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" id="date" />
                            <input className="text-primary lg:text-base text-sm px-2 py-1 border border-neutral" value={time} onChange={(e) => setTime(e.target.value)} type="time" name="time" id="time" />
                        </div>
                    </div>
                    <div className="flex flex-col shadow p-2">
                        <h2 className="lg:text-2xl text-lg font-notoserif text-primary flex items-center gap-3"><Users className="text-secondary lg:size-5 size-4"/>Number of Guests</h2>
                        <div className="flex justify-center items-center gap-10">
                            <button onClick={() => setGuests(guests - 1)} className="text-primary lg:text-base text-sm size-8 flex items-center justify-center border border-neutral rounded">-</button>
                            <h3 className="text-primary text-xl ">{guests}</h3>
                            <button onClick={() => setGuests(guests + 1)} className="text-primary lg:text-base text-sm size-8 flex items-center justify-center border border-neutral rounded">+</button>
                        </div>
                    </div>
                    <div className="flex flex-col shadow p-2">
                        <h2 className="lg:text-2xl text-lg font-notoserif text-primary flex items-center gap-3"><RectangleHorizontal className="text-secondary lg:size-5 size-4"/>Table Number</h2>
                        <input className="text-primary lg:text-base text-sm border border-neutral px-2 py-1" value={table} onChange={(e) => setTable(Number(e.target.value))} type="number" name="table" id="table" />
                    </div>
                    <button onClick={(e)=>HandleSubmit(e)} className="lg:px-3 px-2 py-1 lg:text-sm text-xs bg-primary text-tertiary" type="submit">Update</button>
                </form>
            </div>
    )
}