"use client"
import { CheckCircle2, CalendarPlus, MapPin} from "lucide-react"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
export default function Page() {
  const searchParams = useSearchParams()
  const date = searchParams.get('date')
  const [calendarLink, setCalendarLink] = useState("")
  const formatGoogleDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
  }
  useEffect(() => {
    const savedDate = date
    if (!savedDate) return
    const start = new Date(savedDate)
    const end = new Date(start.getTime() + 1.5 * 60 * 60 * 1000)
    const formattedStart = formatGoogleDate(start)
    const formattedEnd = formatGoogleDate(end)
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Lumina%20Dining%20Reservation&dates=${formattedStart}/${formattedEnd}`
    setCalendarLink(gCalUrl)
  }, [date])
    return(
        <section className="flex-1 w-3/4 flex flex-col justify-center items-center gap-10">
            <CheckCircle2 className="size-32 text-secondary"/>
            <div className="flex flex-col gap-2 items-center">
                <h2 className="font-notoserif lg:text-5xl text-3xl text-center  ">Reservation Confirmed</h2>
                <p className="text-neutral text-center text-sm lg:text-base ">Thank you for choosing Lumina Dining. Your reservation is confirmed, and our team is ready to host you and your guests for a spectacular meal. Please take a moment to add this event to your calendar or save your location details below. If your plans change, please refer to our cancellation policy to manage your booking</p>
            </div>
            <div className="flex items-center justify-center gap-5">
                <a target="_blank" href={calendarLink}  className="bg-primary lg:px-5 px-3 lg:py-2 py-1 text-tertiary lg:text-base text-xs flex items-center gap-2"><CalendarPlus className="lg:size-4 size-3"/> Add to Calendar</a>
                <button  className="border border-primary lg:px-5 px-3 lg:py-2 py-1 text-primary lg:text-base text-xs flex items-center gap-2"><MapPin className="lg:size-4 size-3"/> Get location</button>
            </div>
        </section>
    )
}