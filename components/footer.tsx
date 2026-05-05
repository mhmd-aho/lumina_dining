export default function Footer() {
    return (
        <footer className="sm:h-48 h-32 w-full bg-tertiary flex flex-col justify-center items-center sm:gap-8 gap-4">
            <h1 className="text-primary font-notoserif font-medium text-2xl tracking-wider">Lumina Dinning</h1>
            <div className="flex sm:space-x-8 space-x-2 text-neutral sm:text-base text-xs">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Contact</p>
                <p>Location</p>
            </div>
            <p className="text-neutral sm:text-base text-xs">© 2024 LUMINA DINING. THE LUMINOUS TABLE EXPERIENCE.</p>
        </footer>
    );
}   