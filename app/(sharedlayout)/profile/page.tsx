import { serverFetch } from "@/lib/server-fetch"
import { ReservetionType } from "@/lib/schemas"
import { Clock, Users,RectangleHorizontal } from "lucide-react";
import ReservationButtons from "@/components/reservation-buttons"
import { getUser } from "@/lib/user";
import { redirect } from "next/navigation";
export default async function Profile(){
    const user = await getUser();
    if(typeof user === 'string'){
        return redirect('/auth/sign-in')
    }
    let reservation: ReservetionType[] | undefined;
    try{
        const res = await serverFetch('/api/reserve/',{method:"GET"})
        const data = await res.json()
        reservation = data
    }catch(err){
        console.log(err)
    }
    return(
        <div className="h-[calc(100vh-3.5rem)] flex flex-col items-start justify-start bg-tertiary text-primary">
            <div className="w-full flex flex-col items-start p-6 ">
                <h1 className="font-notoserif lg:text-3xl text-xl">Welcome back, {user.username}</h1>
                <p className="text-neutral lg:w-1/2 w-full lg:text-base text-sm">Manage your upcoming gastronomic journeys and view your palate
                    preferences.</p>
            </div>
            <div className="flex-1 w-full flex sm:flex-row flex-col gap-3">
                <div className="w-full sm:w-1/4 sm:h-full h-fit flex sm:flex-col flex-row sm:items-start items-center justify-center sm:justify-start gap-5 sm:px-6 max-sm:overflow-x-auto">
                    <button className={`sm:px-2 border-secondary sm:text-sm whitespace-nowrap text-secondary sm:border-l-2 max-sm:border-b-2`}>My Reservations</button>
                    <button className={`sm:px-2 border-secondary sm:text-sm whitespace-nowrap text-primary`}>My Favourites</button>
                    <button className={`sm:px-2 border-secondary sm:text-sm whitespace-nowrap text-primary`}>Account Settings</button>
                </div>
                <div className="flex-1 flex flex-col sm:items-start items-center justify-center sm:justify-start gap-5 h-full px-6">
                    <h1 className="font-notoserif lg:text-2xl text-xl">My Reservations</h1>
                    <div className="flex-1 w-full flex flex-col">
                        <div className="w-full flex flex-col items-start justify-start gap-5">
                            { reservation? reservation.map((item)=>{
                                const date = new Date(item.booking_time);
                                const day = new Intl.DateTimeFormat('en-US', {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                }).format(date);
                                const time = new Intl.DateTimeFormat('en-US',{
                                    hour:"numeric",
                                    minute:"numeric"
                                }).format(date);
                                return(
                                    <div key={item.id} className="w-full h-52 p-2 flex flex-col justify-between shadow">
                                            <h2 className="font-notoserif lg:text-xl text-lg">Reservation at {day}</h2>
                                            <div className="w-full px-5 flex justify-between items-center">
                                                <div>
                                                    <h3 className="text-neutral lg:text-lg text-sm flex items-center gap-2"><Clock className="lg:size-4 size-3"/>TIME</h3>
                                                    <h4 className="lg:text-lg text-sm">{time}</h4>
                                                </div>
                                                <div>
                                                    <h3 className="text-neutral lg:text-lg text-sm flex items-center gap-2"><Users className="lg:size-4 size-3"/>GUESTS</h3>
                                                    <h4 className="lg:text-lg text-sm">{item.guests} persons</h4>
                                                </div>
                                                <div>
                                                    <h3 className="text-neutral lg:text-lg text-sm flex items-center gap-2"><RectangleHorizontal className="lg:size-4 size-3"/>TABLE</h3>
                                                    <h4 className="lg:text-lg text-sm">#{item.table}</h4>
                                                </div>
                                            </div>
                                            <ReservationButtons id={item.id}/>
                                        </div>  

                                )
                            })
                            :<p>You have no reservations</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}