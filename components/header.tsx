import Link from "next/link";
import MobileMenu from "./mobile-menu";
import User from "./user";
import { getUser } from "@/lib/user";
import NavBar from "./desktop-nav";
import { UserType } from "@/lib/schemas";
export default async function Header() {
    const user: UserType | string = await getUser()
    return (
        <header className="sticky top-0 z-50 h-14 w-full bg-tertiary flex justify-between items-center px-4">
            <MobileMenu/>
            <Link href="/">
                <span className="text-2xl font-notoserif text-primary tracking-widest">LUMINA</span>
            </Link>
            <NavBar/>
            <User user={user}/>
        </header>
    );
}   