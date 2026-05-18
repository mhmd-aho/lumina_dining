'use client'
import { passwordUpdateSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { changePasswordAction } from "@/app/action";
import PasswordInput from "@/components/password-input";
import { toast } from "sonner";
export default function Page(){
    const {register, handleSubmit, formState: {errors},reset} = useForm<z.infer<typeof passwordUpdateSchema>>({
        resolver: zodResolver(passwordUpdateSchema),
        defaultValues: {
            new_password: "",
            re_new_password: "",
            current_password: "",
        }
    })
    async function onSubmit(data:z.infer<typeof passwordUpdateSchema>){
    const res = await changePasswordAction(data);
    if(res.success){
      toast.success("password updated successfully")
    }else{
        toast.error("failed to update password")
    }
    reset()
  }
    return(
        <div className="w-full sm:w-2/3 lg:w-1/2 sm:h-fit h-[calc(100vh-3.5rem)] px-2 sm:border sm:rounded-lg sm:border-neutral p-2 lg:p-5 flex flex-col gap-4">
                <h1 className="font-notoserif text-primary lg:text-3xl text-xl">Update your password</h1>
                <form className="flex flex-col gap-5 " onSubmit={handleSubmit(onSubmit)}>
                    <PasswordInput register={register} errors={errors} name="current_password" placeholder="Current Password" />
                    <PasswordInput register={register} errors={errors} name="new_password" placeholder="New Password" />
                    <PasswordInput register={register} errors={errors} name="re_new_password" placeholder="Confirm New Password" />
                    <button className="lg:px-3 px-2 py-1 lg:text-sm text-xs bg-primary text-tertiary" type="submit">Update Password</button>
                </form>
            </div>
    )
}