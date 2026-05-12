'use client'
import { Calendar} from "lucide-react";
import Calender from "@/components/calender";
import Hours from "@/components/hours" 
import Guests from "@/components/guests"
import { useState} from "react";
import { useRouter } from "next/navigation";
export default function Date() {
    const [selectedDate,setSelectedDate] = useState<string | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [selectedGuests, setSelectedGuests] = useState<number | null>(null);
    const [dateError,setDateError] = useState<boolean>(false)
    const [timeError,setTimeError] = useState<boolean>(false)
    const [guestsError,setGuestsError] = useState<boolean>(false)
    const router = useRouter(); 
    const handleSumbit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!selectedDate){
            setDateError(true)
            return;
        }
        if(!selectedTime){
            setTimeError(true)
            return;
        }
        if(selectedGuests <= 0 || !selectedGuests){
            setGuestsError(true)
            return;
        }
        localStorage.setItem('selected-date',selectedDate + " " + selectedTime)
        localStorage.setItem('selected-guests',selectedGuests + "")
        router.push('/reservation/table')
    }
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
                           <Calender dateError={dateError} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                           <Hours timeError={timeError} selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
                        </div>
                    </div>
                    <Guests guestsError={guestsError} selectedGuests={selectedGuests} setSelectedGuests={setSelectedGuests}/>
                    <div className="lg:w-1/2 w-full flex justify-end items-center max-sm:px-2">
                        <button onClick={(e)=>handleSumbit(e)} className="bg-primary lg:px-5 px-3 lg:py-2 py-1 text-tertiary lg:text-base text-xs" type="submit">Continue to Table Selection</button>
                    </div>
                </form>
            </section>
    );
}