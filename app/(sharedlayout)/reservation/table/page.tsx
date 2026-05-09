import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return(
        <section className="flex-1 w-full flex lg:flex-row flex-col gap-8 px-4">
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
                    <div className="size-16 rounded  border-3 border-secondary flex items-center justify-center">
                        <p className="text-secondary">T01</p>
                    </div>
                    <div className="size-16 rounded bg-neutral flex items-center justify-center">
                        <p className="text-tertiary">T02</p>
                    </div>
                    <div className="size-16 rounded  border-3 border-secondary flex items-center justify-center">
                        <p className="text-secondary">T03</p>
                    </div>
                    <div className="size-16 rounded border-3 border-secondary flex items-center justify-center">
                        <p className="text-secondary">T04</p>
                    </div>
                    <div className="size-16 rounded  border-3 border-secondary flex items-center justify-center">
                        <p className="text-secondary">T05</p>
                    </div>
                    <div className="size-16 rounded bg-secondary flex items-center justify-center scale-125">
                        <p className="text-tertiary">T06</p>
                    </div>
                    <div className="size-16 rounded border-3 border-secondary flex items-center justify-center">
                        <p className="text-secondary">T07</p>
                    </div>
                    <div className="size-16 rounded  border-3 border-secondary flex items-center justify-center">
                        <p className="text-secondary">T08</p>
                    </div>
                    <div className="size-16 rounded border-3 border-secondary flex items-center justify-center">
                        <p className="text-secondary">T09</p>
                    </div>
                    <div className="size-16 rounded  border-3 border-secondary flex items-center justify-center">
                        <p className="text-secondary">T10</p>
                    </div>
                    <div className="h-16 w-32 rounded border-3 border-secondary flex items-center justify-center">
                        <p className="text-secondary">Lounge A</p>
                    </div>
                    <div className="h-16 w-32 rounded  border-3 border-secondary flex items-center justify-center">
                        <p className="text-secondary">Lounge B</p>
                    </div>
                </div>
            </div>
        </section>
    )
}