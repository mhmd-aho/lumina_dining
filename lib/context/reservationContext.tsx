"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ReservationContextType {
    table:number | undefined;
    setTable:React.Dispatch<React.SetStateAction<number | undefined>>;
    date:string | undefined;
    setDate:React.Dispatch<React.SetStateAction<string | undefined>>;
    guests:number | undefined;
    setGuests:React.Dispatch<React.SetStateAction<number | undefined>>;

}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [table, setTable] = useState<number>();
  const [date, setDate] = useState<string>();
  const [guests, setGuests] = useState<number>();

  return (
    <ReservationContext.Provider value={{ table, setTable, date, setDate, guests, setGuests }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return context;
}
