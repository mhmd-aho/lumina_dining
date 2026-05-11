"use client"
import Link from "next/link";
import { UserType } from "@/lib/schemas";

export default function User({ user }: { user: UserType | string }) {
    return(
        <div className="w-fit">
            {typeof user !== 'string' ? (
                <Link href="/profile" className="text-base text-neutral">{user.username}</Link>
            ) : (
                <Link className="text-base text-neutral" href="/auth/sign-in">Log In</Link>
            )}
        </div>
    )
}