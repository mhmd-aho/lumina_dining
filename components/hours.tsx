"use client";
import React from "react";
export default function Hours({timeError,selectedTime,setSelectedTime}: {timeError: boolean,selectedTime: string | null,setSelectedTime: (time: string) => void}) {
    const handleTimeSelect = (e: React.MouseEvent, time: string) => {
        e.preventDefault();
        setSelectedTime(time);
    }
    return(
        <div className="lg:w-96 w-full">
            <h2>Available Times</h2>
            <div className="flex max-lg:justify-between max-lg:items-center lg:gap-2 flex-wrap ">
                {Array.from({ length: 9 }).map((_, i) => (
                    <React.Fragment key={i}>
                        <button value={`${i + 14}:00:00`} onClick={(e: React.MouseEvent) => handleTimeSelect(e, `${i + 14}:00:00`)} className={`border border-neutral w-20 h-10 flex justify-center items-center hover:bg-secondary hover:text-tertiary hover:border-none rounded ${selectedTime === `${i + 14}:00:00` ? 'bg-secondary text-tertiary border-none':''}`}>
                            <p className="text-lg">{i + 14}:00</p>
                        </button>
                        <button value={`${i + 14}:30:00`} onClick={(e: React.MouseEvent) => handleTimeSelect(e, `${i + 14}:30:00`)} className={`border border-neutral w-20 h-10 flex justify-center items-center hover:bg-secondary hover:text-tertiary hover:border-none rounded ${selectedTime === `${i + 14}:30:00` ? 'bg-secondary text-tertiary border-none':''}`}>
                            <p className="text-lg">{i + 14}:30</p>
                        </button>
                    </React.Fragment>
                ))}
            </div>
            {timeError && <p className="text-red-500 text-sm">Please select a time</p>}
        </div>
    )
}