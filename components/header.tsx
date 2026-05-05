import Link from "next/link";
import { Menu } from "lucide-react";
export default function Header() {
    return (
        <header className="sticky top-0 z-50 h-14 w-full bg-tertiary flex justify-between items-center px-4">
            <Menu className='size-4 sm:hidden text-primary'/>
            <span className="text-2xl font-notoserif text-primary tracking-widest">LUMINA</span>
            <nav className="flex space-x-8 font-notoserif max-sm:hidden">
                <Link className="text-secondary border-b-2 border-secondary" href="/">Menu</Link>
                <Link className="text-primary" href="/">Reservations</Link>
                <Link className="text-primary" href="/">Our Story</Link>
            </nav>
            <Link className="text-base text-neutral" href="/">Log In</Link>
        </header>
    );
}   