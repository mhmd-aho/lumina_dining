"use client"
import { usePathname } from "next/navigation";
export default function Steps() {
    const pathname = usePathname()
    return (
        <>
            <section className="lg:flex hidden items-center w-fit  justify-center gap-1">
                    <div className='flex flex-col items-center justify-end gap-1 size-20'>
                        <div className={`size-10 flex justify-center items-center rounded-xl ${pathname.includes('/table') || pathname.includes('/confirm') || pathname.includes('/done') ? 'text-tertiary bg-secondary border-none' : 'text-primary border-neutral border'}`}>
                            <p>1</p>
                        </div>
                        <p className={`${pathname.includes('/table') || pathname.includes('/confirm') || pathname.includes('/done') ? 'text-secondary' : 'text-primary'}`}>Schedule</p>
                    </div>
                    <div className={`h-0.5 w-52 ${pathname.includes('/table') || pathname.includes('/confirm') || pathname.includes('/done') ? 'bg-secondary' : 'bg-neutral'}`}/>
                    <div className="flex flex-col items-center justify-end gap-1 size-20">
                        <div className={`size-10 border-neutral border flex justify-center items-center rounded-xl ${pathname.includes('/confirm') || pathname.includes('/done') ? 'text-tertiary bg-secondary border-none' : 'text-primary border-neutral border'}`}>
                            <p>2</p>
                        </div>
                        <p className={`${pathname.includes('/confirm') || pathname.includes('/done') ? 'text-secondary' : 'text-primary'}`}>Table</p>
                    </div>
                    <div className={`h-0.5 w-52 ${pathname.includes('/confirm') || pathname.includes('/done') ? 'bg-secondary' : 'bg-neutral'}`} />
                    <div className="flex flex-col items-center justify-end gap-1 size-20">
                        <div className={`size-10 border-neutral border flex justify-center items-center rounded-xl ${pathname.includes('/done') ? 'text-tertiary bg-secondary border-none' : 'text-primary border-neutral border'}`}>
                            <p>3</p>
                        </div>
                        <p className={`${pathname.includes('/done') ? 'text-secondary' : 'text-primary'}`}>Confirm</p>
                    </div>
            </section>
            <section className="lg:hidden flex flex-col items-center border-b border-secondary w-fit">
                {
                    pathname.includes('/done')?
                    <p className="text-primary font-notoserif text-3xl">Booking Secured</p>:
                    <>
                        <p className="text-secondary font-notoserif text-lg">Step {pathname.includes("/date") ? "1" : pathname.includes("/table") ? "2" : "3"} of 3</p>
                        <p className="text-primary font-notoserif text-3xl">{pathname.includes("/date") ? "Schedule" : pathname.includes("/table") ? "Table" : "Confirm"}</p>
                    </>
                }
            </section>
        </>
    );
}