'use client'
import { Calendar,ChevronLeft } from "lucide-react";
import Calender from "@/components/calender";
import Hours from "@/components/hours" 
import Guests from "@/components/guests"
import { useState,useEffect } from "react";
export default function Date() {
    const [selectedDate,setSelectedDate] = useState<string | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [fullDate,setFullDate] = useState<string | null>(null)
    useEffect(()=>{
        if(selectedDate && selectedTime){
            setFullDate(`${selectedDate} ${selectedTime}`)
        }
    },[selectedDate,selectedTime])
    return (
         <section className="flex-1 w-full flex flex-col items-center gap-5">
                <div className="flex flex-col items-center gap-2 text-center lg:w-1/2 w-full">
                    <h1 className="lg:text-3xl text-xl font-notoserif">Your Table Awaits</h1>
                    <p className="text-neutral font-notosans lg:text-base text-sm">Experience culinary precision and Mediterranean warmth. Choose your
preferred time to begin your journey at Lumina.</p>
                </div>
                <form  className="flex flex-col justify-center items-center gap-4 w-full">
                    <div className="lg:w-1/2 w-full h-fit p-4 flex flex-col gap-3 lg:shadow">
                        <h1 className="font-notoserif lg:text-xl text-lg flex gap-1 items-center"><Calendar className="lg:size-5 size-4 text-secondary"/> Select Date & Time</h1>
                        <div className="flex lg:flex-row flex-col lg:justify-between gap-2 "> 
                           <Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                           <Hours selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
                        </div>
                        <p className="text-center">{fullDate}</p>
                    </div>
                    <Guests/>
                    <div className="flex justify-between lg:w-1/2 w-full px-2">
                        <button className="text-neutral flex items-center gap-1"><ChevronLeft className="lg:size-5 size-4"/> Back</button>
                        <button className="bg-primary lg:px-5 px-3 lg:py-2 py-1 text-tertiary lg:text-base text-sm">Continue to table selection</button>
                    </div>
                </form>
            </section>
    );
}