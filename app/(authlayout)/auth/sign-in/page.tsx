"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { signinSchema } from "@/lib/schemas";
import { z } from "zod";
import { signinAction } from "@/app/action";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import PasswordInput from "@/components/password-input";
export default function Page() {
    const router = useRouter();
    const [pending,startTransition] = useTransition();
    const {register,handleSubmit,formState:{errors},reset} = useForm<z.infer<typeof signinSchema>>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    });
    const handleLogin = async (data:z.infer<typeof signinSchema>) => {
        startTransition(async () => {
            try{
                const res = await signinAction(data);
                if(res.success){
                    console.log('signing in')
                    router.push('/');
                }else{
                    console.log(res.error)
                }
            }catch(err){
                console.log(err)
            }finally{
                reset()
            }
        })
    }
    return(
        <section className="flex-1 w-screen flex flex-col justify-center items-center gap-10">
            <div className="lg:w-96 w-full lg:h-fit h-[calc(100vh-3.5rem)] flex flex-col gap-5 p-3 lg:text-center lg:shadow">
                <div className="flex flex-col lg:justify-center justify-start lg:items-center items-start gap-2">
                    <h1 className="text-3xl font-notoserif">Sign in</h1>
                    <p className="text-neutral">Please enter your details to access your account</p>
                </div>
                <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-2">
                    <div className="relative">
                        <input {...register('username')} className="border border-neutral/50 p-2 w-full" type="text" placeholder="Username" />
                        {errors.username && <span className="absolute -bottom-1  left-1 text-xs text-red-500 bg-tertiary">{errors.username.message}</span>}
                    </div>
                    <PasswordInput register={register} name="password" errors={errors} placeholder="password"/>
                    <button disabled={pending} className="bg-primary lg:px-5 px-3 lg:py-2 py-1 text-tertiary lg:text-base text-xs" type="submit">Sign in</button>
                </form>
                <div className="flex items-center gap-2">
                    <p className="text-neutral">Don't have an account?</p>
                    <Link href="/auth/sign-up" className="text-secondary">Sign up</Link>
                </div>
            </div>
        </section>
    )
}