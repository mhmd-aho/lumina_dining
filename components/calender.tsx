"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
export default function Calender({dateError,selectedDate,setSelectedDate}: {dateError: boolean,selectedDate: string | null,setSelectedDate: (date: string) => void}) {
    const [month,setMonth] = useState(new Date().getMonth())
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    const today = new Date()
    const year = today.getFullYear()
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    const monthStart = new Date(year, month, 1).getDay()
    const orderedDays = [...days.slice(monthStart), ...days.slice(0, monthStart)]
    const monthEnd = new Date(year, month + 1, 0).getDate()
    const handleDateSelect = (e: React.MouseEvent,date: number) => {
        e.preventDefault();
        const mm = String(month+1).padStart(2,'0')
        const dd = String(date).padStart(2,'0')
        setSelectedDate(`${year}-${mm}-${dd}`)
    }
    return (
        <div className="w-full lg:w-96 flex max-lg:flex-col gap-5 ">
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between px-2">
                    <h2 className="text-base lg:text-lg">{months[month]} {year}</h2>
                    <div>
                        <button disabled={month === today.getMonth()} onClick={(e: React.MouseEvent) => {e.preventDefault(); setMonth(month - 1)}}><ChevronLeft className={`lg:size-5 size-4 ${month === today.getMonth() ? 'text-neutral' : 'text-secondary'}`}/></button>
                        <button disabled={month === 11} onClick={(e: React.MouseEvent) => {e.preventDefault(); setMonth(month + 1)}}><ChevronRight className={`lg:size-5 size-4 ${month === 11 ? 'text-neutral' : 'text-secondary'}`}/></button>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-2 w-full">
                    {orderedDays.map((day, i) => (
                        <p key={`day-header-${i}`} className="text-center">{day}</p>
                    ))}
                    {Array.from({ length: monthEnd }).map((_, i) => (
                        <button disabled={i + 1 < today.getDate() + 2 && month === today.getMonth()} value={i+1} onClick={(e: React.MouseEvent) => {handleDateSelect(e,i+1)}} key={`day-${i}`} className={`text-center ${i + 1 <= today.getDate() + 2 && month === today.getMonth() ? 'text-neutral' : 'hover:bg-secondary hover:text-tertiary rounded'} ${selectedDate === `${year}-${String(month+1).padStart(2,'0')}-${String(i+1).padStart(2,'0')}` && 'bg-secondary text-tertiary border-none'}`}>{i + 1}</button>
                    ))}
                </div>
                {dateError && <p className="text-red-500 text-sm">Please select a date</p>}
            </div>
        </div>
    );
}   