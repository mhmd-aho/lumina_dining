"use client"
import { Minus, Plus, Users } from "lucide-react";
import { useState } from "react";
export default function Guests() {
    const [guests,setGuests] = useState(0);
    const handleGuestIncrease = (e: React.MouseEvent) => {
        e.preventDefault();
        setGuests(guests + 1)
    }
    const handleGuestDecrease = (e: React.MouseEvent) => {
        e.preventDefault();
        setGuests(guests - 1)
    }
    return (
        <div className="lg:w-1/2 w-full h-fit p-4 flex flex-col gap-3 lg:shadow">
            <div className="flex flex-col gap-1">
                <h1 className="font-notoserif lg:text-xl text-lg flex gap-1 items-center"><Users className="lg:size-5 size-4 text-secondary"/> Select Number of Guests</h1>
                <p className="text-neutral max-lg:text-xs">Parties larger than 8 require a direct call for orchestration.</p>
            </div>
            <div className="flex justify-center items-center lg:gap-16 gap-8">
                <button onClick={(e) => handleGuestDecrease(e)} className="lg:size-14 size-10 border border-neutral rounded-xl flex items-center justify-center">
                    <Minus className="lg:size-7 size-4"/>
                </button>
                <div className="lg:size-20 size-10 flex flex-col items-center justify-center">
                    <p className="font-notoserif lg:text-6xl text-4xl">{String(guests).padStart(2,'0')}</p>    
                    <p className="text-sm text-neutral">Guests</p>
                </div>
                <button onClick={(e) => handleGuestIncrease(e)} className="lg:size-14 size-10 border border-neutral rounded-xl flex items-center justify-center">
                    <Plus className="lg:size-7 size-4"/>
                </button>
            </div>
        </div>
    )
}