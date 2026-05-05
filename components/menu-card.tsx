import Image from "next/image";
import bg from '@/public/landing-page-bg.jpg'
export default function MenuCard() {
    return (
        <div className="w-full h-96 col-span-1 shadow">
            <Image className="w-full h-2/3 object-cover" src={bg} alt="menu-card-bg" width={288} height={250}/>
            <div className="p-4 bg-white flex flex-col gap-4">
                <div className="flex justify-between">
                    <h1 className="font-notoserif text-primary sm:text-2xl text-xl">Item name</h1>
                    <p className="text-secondary text-xl">$10.99</p>
                </div>
                <p className="text-neutral text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
        </div>
    );
}   