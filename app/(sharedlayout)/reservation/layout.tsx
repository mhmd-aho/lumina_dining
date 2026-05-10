import Buttons from "@/components/reservationButton";
import Steps from "@/components/steps";
import { ReservationProvider } from "@/lib/context/reservationContext";
export default function ReservationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="min-h-screen w-full flex flex-col items-center gap-5 bg-tertiary text-primary pt-4">
            <ReservationProvider>
                <Steps/>
                {children}
                <Buttons/>
            </ReservationProvider>
        </section>
    );
}