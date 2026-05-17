'use client'
import { passwordUpdateSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { changePasswordAction } from "@/app/action";
export default function Page(){
    const {register, handleSubmit, formState: {errors},reset} = useForm<z.infer<typeof passwordUpdateSchema>>({
        resolver: zodResolver(passwordUpdateSchema),
        defaultValues: {
            current_password: "",
            new_password: "",
            re_new_password: "",
        }
    })
    async function onSubmit(data:z.infer<typeof passwordUpdateSchema>){
    const {current_password, new_password, re_new_password} = data;
    const res = await changePasswordAction(current_password, new_password, re_new_password);
    if(res.success){
      console.log("success")
    }else{
        console.log("failed")
    }
    reset()
  }
    return(
        <div className="w-full sm:w-2/3 lg:w-1/2 sm:h-fit h-[calc(100vh-3.5rem)] px-2 sm:border sm:rounded-lg sm:border-neutral p-2 lg:p-5 flex flex-col gap-4">
                <h1 className="font-notoserif text-primary lg:text-3xl text-xl">Update your password</h1>
                <form className="flex flex-col gap-5 " onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col shadow p-2">
                        <h2 className="lg:text-2xl text-lg font-notoserif text-primary flex items-center gap-3">Current Password</h2>
                        <input className="text-primary lg:text-base text-sm px-2 py-1 border border-neutral" type="password" id="current-password" {...register("current_password")} />
                        {errors.current_password && <span className="text-red-500 text-sm">{errors.current_password.message}</span>}
                    </div>
                    <div className="flex flex-col shadow p-2">
                        <h2 className="lg:text-2xl text-lg font-notoserif text-primary flex items-center gap-3">New Password</h2>
                        <input className="text-primary lg:text-base text-sm px-2 py-1 border border-neutral" type="password" id="new-password" {...register("new_password")} />
                        {errors.new_password && <span className="text-red-500 text-sm">{errors.new_password.message}</span>}
                    </div>
                    <div className="flex flex-col shadow p-2">
                        <h2 className="lg:text-2xl text-lg font-notoserif text-primary flex items-center gap-3">Confirm New Password</h2>
                        <input className="text-primary lg:text-base text-sm px-2 py-1 border border-neutral" type="password" id="confirm-new-password" {...register("re_new_password")} />
                        {errors.re_new_password && <span className="text-red-500 text-sm">{errors.re_new_password.message}</span>}
                    </div>
                    <button className="lg:px-3 px-2 py-1 lg:text-sm text-xs bg-primary text-tertiary" type="submit">Update Password</button>
                </form>
            </div>
    )
}