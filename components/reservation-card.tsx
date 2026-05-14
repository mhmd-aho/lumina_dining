import { CalendarDays, Clock, Users, RectangleHorizontal } from "lucide-react";
import ReservationButtons from "./reservation-buttons";
import { ReservetionType } from "@/lib/schemas";

export default function ReservationCard({item}: {item: ReservetionType}){
    const date = new Date(item.booking_time);
    const day = new Intl.DateTimeFormat('en-US', {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }).format(date);
            const time = new Intl.DateTimeFormat('en-US', {
              hour: "numeric",
              minute: "numeric"
            }).format(date);
    return(
         <div 
                key={item.id} 
                className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden"
              >
                <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center gap-2">
                  <CalendarDays className="size-4 text-primary" />
                  <h2 className="font-semibold text-slate-700">Reservation for {day}</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5 mb-1">
                        <Clock className="size-3"/> TIME
                      </h3>
                      <p className="text-slate-700 font-medium">{time}</p>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5 mb-1">
                        <Users className="size-3"/> GUESTS
                      </h3>
                      <p className="text-slate-700 font-medium">{item.guests} {item.guests === 1 ? 'person' : 'persons'}</p>
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5 mb-1">
                        <RectangleHorizontal className="size-3"/> TABLE
                      </h3>
                      <p className="text-slate-700 font-medium">Table #{item.table}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <ReservationButtons id={item.id} />
                  </div>
                </div>
              </div>
    )
}