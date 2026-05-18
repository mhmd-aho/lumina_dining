"use client"
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAllReservations,getAllTables } from "@/app/action";
import type { TableType } from "@/lib/schemas";
export default function Page() {
    const [selectedTable,setSelectedTable] = useState<number | null>(null);
    const [error,setError] = useState<boolean>(false);
    const date = localStorage.getItem('selected-date')
    const guestsNumber = Number(localStorage.getItem('guests'))
    const notForLounge = guestsNumber < 6
    const [tables,setTables] = useState<Array<{id:number}>>([])
    const [reservations,setReservations] = useState<Array<{table: number}>>([])
    const targetDate = new Date(date)   
    const hourAndHalf = 90 * 60 * 1000
    const startTargetDate = new Date(targetDate.getTime() - hourAndHalf).toISOString()
    const endTargetDate = new Date(targetDate.getTime() + hourAndHalf).toISOString()

    useEffect(() => {
        const getReservations = async ()=>{
            if(!date){
                return
            }
            const response = await getAllReservations(startTargetDate,endTargetDate)
            if(response.success){
                setReservations(response.data)
            }else{
                console.log('error in get allreservations')
            }
        }
        const getTables = async () =>{
            const response = await getAllTables()
            if(response.success){
                setTables(response.data)
            }else{
                console.log('error in get all tables')
            }
        }
      getTables();
      getReservations();
    }, [date,startTargetDate,endTargetDate]);
    const router = useRouter();
    const handleTableSelect = (e: React.MouseEvent) => {
        e.preventDefault();
        if(!selectedTable){
            setError(true);
            return;
        }
        localStorage.setItem('selected-table',selectedTable + "")
        router.push('/reservation/confirm')
    }
    return(
<>
            <section className="flex-1 w-full flex flex-col justify-center items-center gap-8 px-4">
                <div className="flex-1 flex flex-col lg:flex-row gap-4">
                    <div className="lg:w-72 w-full h-fit p-2 rounded shadow flex flex-col max-lg:items-center  lg:gap-5 gap-2">
                        <div className="w-full flex flex-col max-lg:items-center gap-2 border-b border-neutral/50 lg:pb-10 pb-2">
                            <h2 className="text-2xl font-notoserif">Select your table</h2>
                            <p className="text-neutral max-lg:text-center max-lg:text-sm">
                                Select your preferred dining atmosphere. The central tables provide a front-row view of the Chef’s orchestration.
                            </p>
                        </div>
                        <div className="flex lg:flex-col lg:gap-2 gap-4">
                            <div className="flex items-center gap-2">
                                <div className="size-4 border-3 rounded-full border-secondary"/>
                                <span>Available</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="size-4 rounded-full bg-neutral"/>
                                <span>Reserved</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="size-4 rounded-full bg-secondary"/>
                                <span>Selected</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 h-full max-lg:w-full shadow max-lg:overflow-x-scroll">
                        <div className="lg:w-full w-[1000px] grid grid-cols-5 justify-center gap-40 p-4">
                            {tables.map((table:TableType)=>{
                                const isReserved = reservations.some((r)=>r.table === table.id)
                                return(
                                    <button 
                                    disabled={isReserved || (notForLounge && table.table_number > 10)} 
                                    key={table.id} 
                                    onClick={() => {
                                        if (isReserved) return; 
                                        setSelectedTable(table.id);
                                    }} 
                                    className={`
                                        ${table.capacity === 6 ? 'w-32 h-16' : 'size-16'} 
                                        ${table.table_number === 11 
                                                                        ? `col-start-1 col-span-2 place-self-center lg:place-self-end ${notForLounge ? 'opacity-40' : ''}` 
                                                                        : ''
                                                                    }

                                                                    ${table.table_number === 12 
                                                                        ? `col-start-4 col-span-2 place-self-center ${notForLounge ? 'opacity-40' : ''}` 
                                                                        : ''
                                                                    }

                                                                    font-bold rounded border-3 border-secondary flex items-center justify-center transition-all duration-200
                                                                    
                                                                    ${isReserved 
                                                                        ? 'bg-neutral border-none text-tertiary opacity-50 cursor-not-allowed' 
                                                                        : (notForLounge && table.table_number > 10)
                                                                            ? 'border-secondary/40 text-secondary/40 cursor-not-allowed'
                                                                            : selectedTable === table.id 
                                                                                ? 'bg-secondary text-tertiary scale-110 shadow-lg cursor-pointer' 
                                                                                : 'text-secondary cursor-pointer active:bg-secondary/10 lg:hover:bg-secondary/10'
                                                                    }
                                                                `}
                                                            >
                                    <p>T {table.table_number}</p>
                                </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full flex justify-between items-center max-sm:px-2">
                {error && <p className="text-red-500">Please select a table</p>}
                    <Link className="flex gap-2" href="/reservation/date"><ChevronLeft/>Back</Link>
                    <button onClick={(e)=>handleTableSelect(e)} className="bg-primary lg:px-5 px-3 lg:py-2 py-1 text-tertiary lg:text-base text-xs" type="submit">Continue to Confirmation</button>
                </div>
            </section>
</>
    )
}