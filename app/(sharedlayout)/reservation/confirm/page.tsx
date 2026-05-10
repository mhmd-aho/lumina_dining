"use client"
import Image from "next/image"
import img from '@/public/Restaurant-IL-Giardino_Hotel-Byblos_Saint-Tropez-©Stephan-Julliard-7-1600x1000.webp'
import { CarFront, Shirt,CircleAlert } from "lucide-react"
import { useReservation } from "@/lib/context/reservationContext";
export default function Page() {
    const {date,guests,table} = useReservation();
    return(
        <section className="flex-1 lg:w-3/4 w-full flex flex-col gap-10">
            <div className="w-full h-fit p-4 flex lg:flex-row flex-col-reverse max-lg:gap-5 lg:justify-between items-center rounded lg:shadow">
                <div className=" flex flex-col gap-5 max-lg:w-full max-lg:px-2">
                    <div className="flex lg:flex-col max-lg:justify-between">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-neutral text-sm font-bold">RESERVATION NAME</h3>
                            <h2 className="font-notoserif lg:text-2xl text-lg">User Name</h2>
                        </div>
                        <div>
                            <h3 className="text-neutral text-sm font-bold">DATE & TIME</h3>
                            <h2 className="font-notoserif lg:text-2xl text-lg">{date}</h2>
                        </div>
                    </div>
                    <div className="flex gap-10 max-lg:justify-between">
                        <div>
                            <h3 className="text-neutral text-sm font-bold">GUEST</h3>
                            <h2 className="font-notoserif lg:text-2xl text-lg">{guests} guests</h2>
                        </div>
                        <div>
                            <h3 className="text-neutral text-sm font-bold">TABLE SELECTION</h3>
                            <h2 className="font-notoserif lg:text-2xl text-lg">#{table}</h2>
                        </div>
                    </div>
                </div>
                <Image className="h-44 object-cover" src={img} alt="restaurant image" width={400} height={400}/>
            </div>
            <div className="w-full flex lg:flex-row flex-col justify-between items-center">
                <div className="w-80 h-52 flex flex-col gap-1 p-2 lg:shadow">
                    <div className="flex items-center gap-2"><CarFront className="size-4 text-secondary"/> <h2 className="font-bold">ARRIVAL</h2></div>
                    <p className="text-neutral">Valet service is available at the main
                        entrance. We recommend arriving 15
                        minutes prior to your reservation for
                        the best experience.</p>
                </div>
                <div className="w-80 h-52 flex flex-col gap-1 p-2 lg:shadow">
                    <div className="flex items-center gap-2"><Shirt className="size-4 text-secondary"/> <h2 className="font-bold">DRESS CODE</h2></div>
                    <p className="text-neutral">
                        Elegant Casual. We kindly request
                        guests refrain from wearing athletic
                        attire, swimwear, or casual flip-flops.
                    </p>
                </div>
                <div className="w-80 h-52 flex flex-col gap-1 p-2 lg:shadow">
                    <div className="flex items-center gap-2"><CircleAlert className="size-4 text-secondary"/> <h2 className="font-bold">CANCELLATION POLICY</h2></div>
                    <p className="text-neutral">
                        Cancellations must be made at least
                        24 hours in advance. Late cancellations
                        may be subject to a fee.
                    </p>
                </div>
            </div>
        </section>
    )
}