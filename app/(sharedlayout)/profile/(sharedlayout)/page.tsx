import { serverFetch } from "@/lib/server-fetch";
import { ReservetionType } from "@/lib/schemas";
import ReservationCard from "@/components/reservation-card";
export default async function Profile() {
    const res = await serverFetch('/api/reserve/', { method: "GET" });
    const reservations : ReservetionType[] = await res.json();

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-6 py-10">
      <header className="mb-8">
        <h1 className="font-notoserif lg:text-3xl text-2xl text-slate-800">My Reservations</h1>
        <p className="text-slate-500 text-sm">View and manage your upcoming table bookings.</p>
      </header>

      <div className="flex flex-col gap-6">
        {reservations && reservations.length > 0 ? (
          reservations.map((item) => (
            <ReservationCard key={item.id} item={item} /> 
          ))
        ) : (
          <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-xl">
             <p className="text-slate-500">You have no reservations at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}