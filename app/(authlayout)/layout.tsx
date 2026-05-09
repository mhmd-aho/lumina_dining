import Link from "next/link";
export default function ReservationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center gap-5 bg-tertiary text-primary pt-4">
            <Link href="/">
                <span className="text-2xl font-notoserif text-primary tracking-widest">LUMINA</span>
            </Link>
            {children}
        </main>
    );
}