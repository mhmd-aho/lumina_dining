"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
export default function Header() {
    const pathname = usePathname()
    return (
        <header className="sticky top-0 z-50 h-14 w-full bg-tertiary flex justify-between items-center px-4">
            <Menu className='size-4 sm:hidden text-primary' />
            <span className="text-2xl font-notoserif text-primary tracking-widest">LUMINA</span>
            <nav className="flex space-x-8 font-notoserif max-sm:hidden">
                <Link className={`${pathname === '/' ? 'text-secondary border-b-2 border-secondary' : 'text-primary'}`} href="/">Menu</Link>
                <Link className={`${pathname.includes('/reservation') ? 'text-secondary border-b-2 border-secondary' : 'text-primary'}`} href="/reservation/date">Reservation</Link>
                <Link className={`${pathname === '/our-story' ? 'text-secondary border-b-2 border-secondary' : 'text-primary'}`} href="/our-story">Our Story</Link>
            </nav>
            <Link className="text-base text-neutral" href="/">Log In</Link>
        </header>
    );
}   