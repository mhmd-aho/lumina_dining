"use client"
import { usePathname } from "next/navigation";
export default function Steps() {
    const pathname = usePathname()
    return (
        <>
            <section className="lg:flex hidden items-center w-fit  justify-center gap-1">
                    <div className="flex flex-col items-center justify-end gap-1 size-20">
                        <div className="size-10 border-neutral border flex justify-center items-center rounded-xl">
                            <p>1</p>
                        </div>
                        <p>Schedule</p>
                    </div>
                    <div className="h-0.5 w-52 bg-neutral" />
                    <div className="flex flex-col items-center justify-end gap-1 size-20">
                        <div className="size-10 border-neutral border flex justify-center items-center rounded-xl">
                            <p>2</p>
                        </div>
                        <p>Table</p>
                    </div>
                    <div className="h-0.5 w-52 bg-neutral" />
                    <div className="flex flex-col items-center justify-end gap-1 size-20">
                        <div className="size-10 border-neutral border flex justify-center items-center rounded-xl">
                            <p>3</p>
                        </div>
                        <p>Confirm</p>
                    </div>
            </section>
            <section className="lg:hidden flex flex-col items-center border-b border-secondary w-fit">
                <p className="text-secondary font-notoserif text-lg">Step {pathname.includes("/date") ? "1" : pathname.includes("/table") ? "2" : "3"} of 3</p>
                <p className="text-primary font-notoserif text-3xl">{pathname.includes("/date") ? "Schedule" : pathname.includes("/table") ? "Table" : "Confirm"}</p>
            </section>
        </>
    );
}