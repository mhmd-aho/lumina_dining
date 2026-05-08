'use client'
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Buttons() {
    const pathname = usePathname();
    if (pathname === '/reservation/done') {
        return null;
    }
    return(
        <div className={`flex lg:w-1/2 w-full max-lg:px-5 ${pathname === '/reservation/date' ? 'justify-end' : 'justify-between'}`}>
            { pathname !== "/reservation/date" && <Link href={pathname === "/reservation/table" ? "/reservation/date" : pathname === "/reservation/confirm" ? "/reservation/table" : "/reservation/confirm"} className="text-neutral flex items-center gap-1"><ChevronLeft className="lg:size-5 size-4"/> Back</Link>}
            <Link href={pathname === "/reservation/date" ? "/reservation/table" : pathname === "/reservation/table" ? "/reservation/confirm" : "/reservation/done"} className="bg-primary lg:px-5 px-3 lg:py-2 py-1 text-tertiary lg:text-base text-sm">Continue to {pathname === '/reservation/confirm' ? 'finish' : pathname === '/reservation/table' ? 'confirm' : 'select a table '}</Link>
        </div>
    )
}