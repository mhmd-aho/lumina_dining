import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
export default function PasswordInput({register,errors,name,placeholder}:{
    register:any
    errors:any
    name:string
    placeholder:string
}){
    const [showPassword,setShowPassword] = useState(false)
    return(
        <div className="relative w-full">
            <input {...register(name)} className="border border-neutral/50 p-2 w-full text-primary placeholder:text-primary/50" id={name} type={showPassword ? "text" : "password"} placeholder={placeholder} />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2">
                {showPassword ? <EyeOff className="size-4 text-primary" /> : <Eye className="size-4 text-primary" />}
            </button>
            {errors[name] && <span className="absolute -bottom-1  left-1 text-xs text-red-500 bg-tertiary">{errors[name].message}</span>}
        </div>
    )
}