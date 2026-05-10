import { MenuItemType } from "@/lib/sechams";
export default function MenuCard({item}: {item: MenuItemType}) {

    return (
        <div className="w-full h-96 col-span-1 shadow">
            <img className="w-full h-2/3 object-cover" src={item.image} alt={item.name}/>
            <div className="p-4 bg-white flex flex-col gap-4">
                <div className="flex justify-between">
                    <h1 className="font-notoserif text-primary text-2xl">{item.name}</h1>
                    <p className="text-secondary text-lg">{item.price}</p>
                </div>
                <p className="text-neutral text-sm">{item.description}</p>
            </div>
        </div>
    );
}   