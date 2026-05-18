"use server"
import { ReservationFormSchema,signinSchema,registerSchema,passwordUpdateSchema } from "@/lib/schemas";
import { serverFetch } from "@/lib/server-fetch";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";
import { z } from "zod";
export async function signinAction(data: z.infer<typeof signinSchema>){
     try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const isJson = res.headers.get('content-type')?.includes('application/json');
        const resData = isJson? await res.json() : null;
        if (!res.ok) {
            throw new Error('sign in failed')
        }
        const token = resData.auth_token;
        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });
        return { success: true, data: resData };
    }catch{
        return {success: false, error: 'sign in failed'}
    }
}
export async function signupAction(data:z.infer<typeof registerSchema>){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const isJson = res.headers.get('content-type')?.includes('application/json');
        const resData = isJson? await res.json() : null;
        if (!res.ok) {
            console.error("Backend error response:", resData);
            return { success: false, error: resData || 'sign up failed' };
        }
        return {success: true, data: resData};
    }catch(error){
        console.error("Fetch error:", error);
        return {success: false, error: 'Network error or internal server error'}
    }
}
export async function logoutAction(){
    try{
        const res = await serverFetch('/auth/token/logout/',{
        method:'POST',
        headers: {
                "Content-Type": "application/json"
            },
        })
        if(!res.ok){
            throw new Error('logout failed')
        }
        const cookieStore = await cookies();
        cookieStore.delete("token");
        return {success: true, data: 'logout success'};
    }catch(error){
        return {success: false, data: error};
    }
}
export async function deleteUserAction(password:string){
    try{
        const res = await serverFetch('/auth/users/me/',{
        method:'DELETE',
        headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify({current_password: password})
        })
        if(!res.ok){
            throw new Error('delete user failed')
        }
        const cookieStore = await cookies();
        cookieStore.delete("token");
        return {success: true, data: 'logout success'};
    }catch(error){
        return {success: false, data: error};
    }
}
export async function changePasswordAction(data:z.infer<typeof passwordUpdateSchema>){
    try{
        const res = await serverFetch('/auth/users/set_password/',{
        method:'POST',
        headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify(data)
    })
    return {success:true, data: await res.json()}
    }catch(error){
        return {success:false, data: error}
    }
}
export async function postReservation(data:z.infer<typeof ReservationFormSchema>){
    try{
        const res = await serverFetch('/api/reserve/',{
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify(data)
    })
    return {success:true, data: await res.json()}
    }catch(error){
        return {success:false, data: error}
    }
    
}
export async function deleteReservation(id:number){
    try{
        const res = await serverFetch(`/api/reserve/${id}/`,{
        method:'DELETE'
    })
    return {success:true, data: await res.json()}
    }catch(error){
        return {success:false, data: error}
    }
}
export async function updateReservation(id:number,data:z.infer<typeof ReservationFormSchema>){
    try{
        const res = await serverFetch(`/api/reserve/${id}/`,{
        method:'PUT',
        headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify(data)
    })
    return {success:true, data: await res.json()}
    }catch(error){
        return {success:false, data: error}
    }
}
export async function favoriteAction(id:number){
    try{
        const res = await serverFetch(`/api/favorite/`,{
        method:'POST',
        headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify({item_id: id})
    })
    updateTag('favorite');
    return {success:true, data: await res.json()}
    }catch(error){
        return {success:false, data: error}
    }
}
export async function unfavoriteAction(id:number){
    try{
        const res = await serverFetch(`/api/favorite/${id}/`,{
        method:'DELETE',
    })
    updateTag('favorite');
    return {success:true, data: await res.json()}
    }catch(error){
        return {success:false, data: error}
    }
}
export async function getAllReservations(start:string,end:string){
    try{
        const res = await serverFetch(`/api/allreservations/?start_date=${start}&end_date=${end}`,{
        method:'GET'
    })
    return {success:true, data: await res.json()}
    }catch(error){
        return {success:false, data: error}
    }
}
export async function getAllTables(){
    try{
        const res = await serverFetch('/api/tables/',{
        method:'GET'
    })
    return {success:true, data: await res.json()}
    }catch(error){
        return {success:false, data: error}
    }
}