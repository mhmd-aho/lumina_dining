"use client"
import Link from "next/link";
import { UserType } from "@/lib/schemas";

export default function User({ user }: { user: UserType | string }) {
    return(
        <div className="w-fit">
            {typeof user !== 'string' ? (
                <h1 className="text-base text-neutral">{user.username}</h1>
            ) : (
                <Link className="text-base text-neutral" href="/auth/sign-in">Log In</Link>
            )}
        </div>
    )
}