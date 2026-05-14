import ProfileNav from "@/components/profile-nav";
import { getUser } from "@/lib/user";
import { redirect } from "next/navigation";
export default async function Layout({children}: Readonly<{
    children: React.ReactNode;
}>){
    const user = await getUser();
    if(typeof user === 'string'){
        return redirect('/auth/sign-in')
    }
    return(
        <section className=" h-fit flex flex-col items-start justify-start bg-tertiary text-primary">
            <div className="w-full flex flex-col items-start p-6 ">
                <h1 className="font-notoserif lg:text-3xl text-xl">Welcome back, {user.username}</h1>
                <p className="text-neutral lg:w-1/2 w-full lg:text-base text-sm">Manage your upcoming gastronomic journeys and view your palate
                    preferences.</p>
            </div>
            <div className="flex-1 w-full flex sm:flex-row flex-col gap-3">
               <ProfileNav/>
                {children}
            </div>
        </section>
    )
}