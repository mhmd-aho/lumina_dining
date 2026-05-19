"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/schemas";
import { z } from "zod";
import { signupAction } from "@/app/action";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import PasswordInput from "@/components/password-input";
import { toast } from "sonner";
export default function Page() {
    const router = useRouter();
    const [pending,startTransition] = useTransition();
    const {register,handleSubmit,formState:{errors},reset} = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            re_password: ""
        }
    });
    const handleSignup = async (data:z.infer<typeof registerSchema>) => {
        startTransition(async () => {
            try{
                const res = await signupAction(data);
                if(res.success){
                    toast.success('account created successfully')
                    router.push('/auth/sign-in');
                }else{
                    toast.error(res.error)
                }
            }catch{
                toast.error("unknown error")
            }finally{
                reset()
            }
        })
    }
    return(
        <section className="flex-1 w-screen flex flex-col justify-center items-center gap-10">
            <div className="lg:w-96 w-full lg:h-fit h-[calc(100vh-3.5rem)] flex flex-col gap-5 p-3 lg:text-center lg:shadow">
                <div  className="flex flex-col lg:justify-center justify-start lg:items-center items-start gap-2">
                    <h1 className="text-3xl font-notoserif">Sign up</h1>
                    <p className="text-neutral">Please enter your details to create<br/> an account</p>
                </div>
                <form onSubmit={handleSubmit(handleSignup)} className="flex flex-col gap-2">
                    <div className="relative">
                        <input {...register('username')} className="border border-neutral/50 p-2 w-full" type="text" placeholder="Username" />
                        {errors.username && <span className="absolute -bottom-1  left-1 text-xs text-red-500 bg-tertiary">{errors.username.message}</span>}
                    </div>
                    <div className="relative">
                        <input {...register('email')} className="border border-neutral/50 p-2 w-full" type="email" placeholder="Email" />
                        {errors.email && <span className="absolute -bottom-1  left-1 text-xs text-red-500 bg-tertiary">{errors.email.message}</span>}
                    </div>
                    <PasswordInput register={register} errors={errors} name="password" placeholder="Password" />
                    <PasswordInput register={register} errors={errors} name="re_password" placeholder="Confirm Password" />
                    <button disabled={pending} className="bg-primary lg:px-5 px-3 lg:py-2 py-1 text-tertiary lg:text-base text-xs" type="submit">Sign up</button>
                </form>
                <div className="flex items-center gap-2">
                    <p className="text-neutral">Already have an account?</p>
                    <Link href="/auth/sign-in" className="text-secondary">Sign in</Link>
                </div>
            </div>
        </section>
    )
}