import UpdateForm from "@/components/update-reservation";
import { serverFetch } from "@/lib/server-fetch";

export default async function Page({params}: {params: Promise<{id: string}>}){
    const {id} = await params;
    let data;
    try{
        const res = await serverFetch(`/api/reserve/${id}`,{method:"GET"})
        data = await res.json()
    }catch(err){
        console.log(err)
    }
    return(
        <UpdateForm data={data}/>
    )
}