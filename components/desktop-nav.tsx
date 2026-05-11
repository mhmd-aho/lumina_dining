"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function NavBar(){
    const pathname = usePathname()
    return(
        <nav className="flex space-x-8 font-notoserif max-sm:hidden">
                <Link className={`${pathname === '/' ? 'text-secondary border-b-2 border-secondary' : 'text-primary'}`} href="/">Menu</Link>
                <Link className={`${pathname.includes('/reservation') ? 'text-secondary border-b-2 border-secondary' : 'text-primary'}`} href="/reservation/date">Reservation</Link>
                <Link className={`${pathname === '/our-story' ? 'text-secondary border-b-2 border-secondary' : 'text-primary'}`} href="/our-story">Our Story</Link>
        </nav>
    )
}