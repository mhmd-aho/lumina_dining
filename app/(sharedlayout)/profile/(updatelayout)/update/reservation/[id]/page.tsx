import UpdateForm from "@/components/update-reservation";
import { serverFetch } from "@/lib/server-fetch";
export default async function Page({params}: {params: Promise<{id: string}>}){
    const {id} = await params;
    const res = await serverFetch(`/api/reserve/${id}`,{method:"GET"})
    const data = await res.json()
    return(
        <UpdateForm data={data}/>
    )
}