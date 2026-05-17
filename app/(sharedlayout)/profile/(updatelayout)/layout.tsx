export default async function UpdateLayout({children}: {children: React.ReactNode}){
    return(
        <section className="h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center bg-tertiary p-4">
            {children}
        </section>
    )
}