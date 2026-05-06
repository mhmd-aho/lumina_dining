import Steps from "@/components/steps";
export default function ReservationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen w-full flex flex-col items-center gap-5 bg-tertiary text-primary pt-4">
            <Steps/>
            {children}
        </main>
    );
}