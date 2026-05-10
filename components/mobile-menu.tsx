import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function MobileMenu(){
    const [open,setOpen] = useState(false);
    const pathname = usePathname();
    return (
        <div className="relative sm:hidden">
            <Menu className='size-4 sm:hidden text-primary' onClick={()=> setOpen(!open)} />
            {
                open && (
                    <div className="absolute top-14 left-0 w-screen h-[calc(100vh-3.5rem)] flex flex-col bg-tertiary">
                        <Link onClick={() => setOpen(false)} className={`p-4 border-b border-neutral/50 text-lg ${pathname == '/' ? 'text-secondary' : 'text-primary'}`} href="/">Menu</Link>
                        <Link onClick={() => setOpen(false)} className={`p-4 border-b border-neutral/50 text-lg ${pathname.includes('/reservation') ? 'text-secondary' : 'text-primary'}`} href="/reservation/date">Reservation</Link>
                        <Link onClick={() => setOpen(false)} className={`p-4 border-b border-neutral/50 text-lg ${pathname == '/our-story' ? 'text-secondary' : 'text-primary'}`} href="/our-story">Our Story</Link>
                    </div>
                )
            }
        </div>
    )
}