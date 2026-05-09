import Link from "next/link";

export default function Page() {
    return(
        <section className="flex-1 w-screen flex flex-col justify-center items-center gap-10">
            <div className="lg:w-96 w-full lg:h-fit h-[calc(100vh-3.5rem)] flex flex-col gap-5 p-3 lg:text-center lg:shadow">
                <div className="flex flex-col lg:justify-center justify-start lg:items-center items-start gap-2">
                    <h1 className="text-3xl font-notoserif">Sign in</h1>
                    <p className="text-neutral">Please enter your details to access your account</p>
                </div>
                <form className="flex flex-col gap-2">
                    <input className="border border-neutral/50 p-2" type="text" placeholder="Email" />
                    <input className="border border-neutral/50 p-2" type="password" placeholder="Password" />
                    <button className="bg-primary lg:px-5 px-3 lg:py-2 py-1 text-tertiary lg:text-base text-xs" type="submit">Sign in</button>
                </form>
                <div className="flex items-center gap-2">
                    <p className="text-neutral">Don't have an account?</p>
                    <Link href="/auth/sign-up" className="text-secondary">Sign up</Link>
                </div>
            </div>
        </section>
    )
}