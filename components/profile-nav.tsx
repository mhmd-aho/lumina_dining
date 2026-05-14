'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ProfileNav(){
    const pathname = usePathname();
    return(
        <nav className="w-full sm:w-1/4 sm:h-full h-fit flex sm:flex-col flex-row sm:items-start items-center justify-between sm:justify-start sm:gap-5 gap-2 px-6 max-sm:overflow-x-auto">
            <Link href="/profile" className={`sm:px-2 border-secondary text-sm whitespace-nowrap ${pathname === "/profile" ? "text-secondary sm:border-l-2 max-sm:border-b-2" : "text-primary"}`}>My Reservations</Link>
            <Link href="/profile/favorites" className={`sm:px-2 border-secondary text-sm  whitespace-nowrap ${pathname === "/profile/favorites" ? "text-secondary sm:border-l-2 max-sm:border-b-2" : "text-primary"}`}>My Favourites</Link>
            <Link href="/profile/account" className={`sm:px-2 border-secondary text-sm  whitespace-nowrap ${pathname === "/profile/account" ? "text-secondary sm:border-l-2 max-sm:border-b-2" : "text-primary"}`}>Account Settings</Link>
        </nav>
    )
}