"use server"
import { ReservationFormSchema,signinSchema,registerSchema,passwordUpdateSchema } from "@/lib/schemas";
import { serverFetch } from "@/lib/server-fetch";
import { updateTag } from "next/cache";
import { cookies } from "next/headers";
import { z } from "zod";
const apiErrors=(data:any)=>{
    if(data?.non_field_errors)
        return data.non_field_errors[0]
    for(const key in data){
        if(data[key]&&typeof data[key]=== 'string')
            return data[key]
        if(Array.isArray(data[key])&& data[key].length>0)
            return data[key][0]
        if(typeof data[key]=== 'object' && data[key]!== null){
            const nestedErr=apiErrors(data[key])
            if(nestedErr)
                return nestedErr
        }
    }
    return null
}
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
    }catch(error){
        return {success: false, error: apiErrors(error)}
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
            return { success: false, error: apiErrors(resData) };
        }
        return {success: true, data: resData};
    }catch(error){
        return {success: false, error: apiErrors(error)}
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
        const isJson = res.headers.get('content-type')?.includes('application/json');
        const resData = isJson? await res.json() : null;
        if (!res.ok) {
            return { success: false, error: apiErrors(resData) };
        }
        const cookieStore = await cookies();
        cookieStore.delete("token");
        return {success: true, data: resData};
    }catch(error){
        return {success: false, error: apiErrors(error)};
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
        const isJson = res.headers.get('content-type')?.includes('application/json');
        const resData = isJson? await res.json() : null;
        if (!res.ok) {
            return { success: false, error: apiErrors(resData) };
        }
        const cookieStore = await cookies();
        cookieStore.delete("token");
        return {success: true, data: resData};
    }catch(error){
        return {success: false, error: apiErrors(error)};
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
    const isJson = res.headers.get('content-type')?.includes('application/json');
    const resData = isJson? await res.json() : null;
    if (!res.ok) {
        return { success: false, error: apiErrors(resData) };
    }
    return {success: true, data: resData};
    }catch(error){
        return {success: false, error: apiErrors(error)};
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
    const resData = await res.json();
    if (!res.ok) {
        return { success: false, error: apiErrors(resData) };
    }
    return {success: true, data: resData};
    }catch(error){
        return {success: false, error: apiErrors(error)};
    }
    
}
export async function deleteReservation(id:number){
    try{
        const res = await serverFetch(`/api/reserve/${id}/`,{
        method:'DELETE'
    })
    const resData = await res.json();
    if (!res.ok) {
        return { success: false, error: apiErrors(resData) };
    }
    return {success: true, data: resData};
    }catch(error){
        return {success: false, error: apiErrors(error)};
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
    const resData = await res.json();
    if (!res.ok) {
        return { success: false, error: apiErrors(resData) };
    }
    return {success: true, data: resData};
    }catch(error){
        return {success: false, error: apiErrors(error)};
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
    const resData = await res.json();
    if (!res.ok) {
        return { success: false, error: apiErrors(resData) };
    }
    return {success: true, data: resData};
    }catch(error){
        return {success: false, error: apiErrors(error)};
    }
}
export async function unfavoriteAction(id:number){
    try{
        const res = await serverFetch(`/api/favorite/${id}/`,{
        method:'DELETE',
    })
    updateTag('favorite');
    const resData = await res.json();
    if (!res.ok) {
        return { success: false, error: apiErrors(resData) };
    }
    return {success: true, data: resData};
    }catch(error){
        return {success: false, error: apiErrors(error)};
    }
}
export async function getAllReservations(start:string,end:string){
    try{
        const res = await serverFetch(`/api/allreservations/?start_date=${start}&end_date=${end}`,{
        method:'GET'
    })
    const resData = await res.json();
    if (!res.ok) {
        return { success: false, error: apiErrors(resData) };
    }
    return {success: true, data: resData};
    }catch(error){
        return {success: false, error: apiErrors(error)};
    }
}
export async function getAllTables(){
    try{
        const res = await serverFetch('/api/tables/',{
        method:'GET'
    })
    const resData = await res.json();
    if (!res.ok) {
        return { success: false, error: apiErrors(resData) };
    }
    return {success: true, data: resData};
    }catch(error){
        return {success: false, error: apiErrors(error)};
    }
}