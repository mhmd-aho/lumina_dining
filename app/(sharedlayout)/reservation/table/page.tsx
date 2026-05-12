"use client"
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Page() {
    const [selectedTable,setSelectedTable] = useState<number | null>(null);
    const [error,setError] = useState<boolean>(false);
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
                    <div className="flex-1 h-full shadow max-lg:overflow-x-scroll">
                        <div className="lg:w-full w-[1000px]   flex justify-center flex-wrap gap-40 py-4">
                            <button onClick={() => setSelectedTable(1)} className={`size-16 rounded  border-3 border-secondary flex items-center justify-center ${selectedTable === 1 ? 'bg-secondary text-tertiary scale-125' : 'text-secondary'}`}>
                                <p>T01</p>
                            </button>
                            <button onClick={() => setSelectedTable(2)} className={`size-16 rounded bg-neutral flex items-center justify-center ${selectedTable === 2 ? 'bg-secondary text-tertiary scale-125' : 'text-secondary'}`}>
                                <p>T02</p>
                            </button>
                            <button onClick={() => setSelectedTable(3)} className={`size-16 rounded  border-3 border-secondary flex items-center justify-center ${selectedTable === 3 ? 'bg-secondary text-tertiary scale-125' : 'text-secondary'}`}>
                                <p>T03</p>
                            </button>
                            <button onClick={() => setSelectedTable(4)} className={`size-16 rounded border-3 border-secondary flex items-center justify-center ${selectedTable === 4 ? 'bg-secondary text-tertiary scale-125' : 'text-secondary'}`}>
                                <p>T04</p>
                            </button>
                            <button onClick={() => setSelectedTable(5)} className={`size-16 rounded  border-3 border-secondary flex items-center justify-center ${selectedTable === 5 ? 'bg-secondary text-tertiary scale-125' : 'text-secondary'}`}>
                                <p>T05</p>
                            </button>
                            <button onClick={() => setSelectedTable(6)} className={`size-16 rounded border-3 border-secondary flex items-center justify-center ${selectedTable === 6 ? 'bg-secondary text-tertiary scale-125' : 'text-secondary'}`}>
                                <p>T06</p>
                            </button>
                            <button onClick={() => setSelectedTable(7)} className={`size-16 rounded border-3 border-secondary flex items-center justify-center ${selectedTable === 7 ? 'bg-secondary text-tertiary scale-125' : 'text-secondary'}`}>
                                <p>T07</p>
                            </button>
                            <button onClick={() => setSelectedTable(8)} className={`size-16 rounded  border-3 border-secondary flex items-center justify-center ${selectedTable === 8 ? 'bg-secondary text-tertiary scale-125' : 'text-secondary'}`}>
                                <p>T08</p>
                            </button>
                            <button onClick={() => setSelectedTable(9)} className={`size-16 rounded border-3 border-secondary flex items-center justify-center ${selectedTable === 9 ? 'bg-secondary text-tertiary scale-125' : 'text-secondary'}`}>
                                <p>T09</p>
                            </button>
                            <button onClick={() => setSelectedTable(10)} className={`size-16 rounded  border-3 border-secondary flex items-center justify-center ${selectedTable === 10 ? 'bg-secondary text-tertiary scale-125' : 'text-secondary'}`}>
                                <p>T10</p>
                            </button>
                            <button onClick={() => setSelectedTable(11)} className={`h-16 w-32 rounded border-3 border-secondary flex items-center justify-center ${selectedTable === 11 ? 'bg-secondary text-tertiary scale-125' : 'text-secondary'}`}>
                                <p>Lounge A</p>
                            </button>
                            <button onClick={() => setSelectedTable(12)} className={`h-16 w-32 rounded  border-3 border-secondary flex items-center justify-center ${selectedTable === 12 ? 'bg-secondary text-tertiary scale-125' : 'text-secondary'}`}>
                                <p>Lounge B</p>
                            </button>
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