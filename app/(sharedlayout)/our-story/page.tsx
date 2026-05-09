/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import img from '@/public/table.png'
import img2 from '@/public/fish.png'
import img3 from '@/public/chef.png'
import img4 from '@/public/kitchen.png'
export default function Page() {
    return(
        <main className="min-h-[calc(100vh-3.5rem)]">
            <div style={{backgroundImage:"url('/sea.jpg')"}} className="h-[calc(100vh-3.5rem)] flex bg-center bg-cover">
                <div className="bg-linear-to-b from-transparent to-tertiary w-full h-full flex flex-col lg:justify-center justify-end lg:items-center items-start gap-2 max-lg:pl-2">
                        <p className="text-secondary font-bold text-sm">Established MCMXCII</p>
                        <h1 className="lg:text-4xl text-2xl font-notoserif text-primary">A Legacy of Light and Flavor</h1>
                        <p className="text-primary/80 lg:text-2xl text-lg lg:text-center text-left">Where the sea meets the table in a <br/> dance of pure Mediterranean alchemy.</p>
                </div>
            </div>
            <div className="lg:h-[calc(100vh-3.5rem)] h-fit py-4 bg-tertiary text-primary flex lg:flex-row flex-col-reverse justify-center items-center lg:gap-20 gap-5 max-lg:px-2">
                <div className="flex flex-col justify-center items-start lg:gap-5 gap-1 lg:w-1/3 w-full">
                    <h3 className="text-primary/80 font-bold lg:text-lg text-sm">Our Genesis</h3>
                    <h2 className="text-primary font-notoserif lg:text-4xl text-2xl">Born from the Shore</h2>
                    <div className="flex flex-col justify-start items-start gap-1 lg:text-lg text-sm">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p>1992. What began as a modest coastal tavern on a secluded cove has evolved into a sanctuary of high-end gastronomy. Our founder sought to capture the "luminous" quality of the coast—the way the sun turns the water to silver and the olive groves to gold.</p>
                        <p>For three decades, we have remained stewards of this horizon, refining our techniques while never losing the soulful warmth of traditional hospitality</p>
                    </div>
                </div>  
                <Image src={img} alt="wine barrels storage" width={400} height={400} className="lg:h-3/4 lg:w-96 w-full h-96 object-center object-cover" />
            </div>
            <div className="h-fit py-4 bg-tertiary text-primary flex flex-col justify-start items-start lg:gap-5 gap-2 lg:px-20">
                <div className="flex flex-col justify-center items-center gap-2 w-full">
                    <h2 className="text-primary font-notoserif lg:text-4xl text-2xl">The Art of the Coast</h2>
                    <p className="text-primary/80 lg:text-2xl text-lg text-center">Commitment to the cycle of the tides and the seasons</p>
                </div>
                <div className="lg:h-80 h-fit w-full flex lg:flex-row flex-col lg:gap-5 gap-0">
                    <Image src={img2} alt="wine barrels storage" width={400} height={400} className="lg:w-3/4 w-full lg:h-full h-52 object-center object-cover shadow" />
                    <div className="lg:w-1/4 w-full bg-primary flex flex-col justify-center items-start gap-2 lg:p-5 p-2 shadow">
                        <h3 className="text-sm font-bold text-secondary">Our Ethos</h3>
                        <h2 className="text-tertiary font-notoserif text-2xl">Zero-Waste Alchemy</h2>
                        <p className="text-neutral text-sm">We view every ingredient as a precious resource. Our kitchens utilize circular preparation methods, from house-made ferments to artisanal composting.</p>
                    </div>
                </div>
                <div className="lg:h-80 h-fit w-full flex lg:flex-row flex-col-reverse lg:gap-5 gap-0">
                    <div className="lg:w-1/4 w-full bg-white flex flex-col justify-end items-start lg:p-5 p-2 shadow">
                        <h2 className="text-primary font-notoserif text-2xl">Precision Engineering</h2>
                        <p className="text-primary/80 text-sm">Modern technology serves as the silent orchestration behind our traditional wood-fire techniques.</p>
                    </div>
                    <Image src={img4} alt="kitchen" width={400} height={400} className="lg:w-3/4 w-full lg:h-full h-52 object-center object-cover" />
                </div>
            </div>
            <div className="bg-white lg:h-[calc(100vh-3.5rem)] h-fit flex lg:flex-row flex-col items-center justify-center gap-15">
                <div className="lg:w-fit w-[80%] h-fit relative">
                    <Image src={img3} alt="chef" width={400} height={400} className="relative lg:h-[600px] lg:w-[400px] h-80 w-full object-center object-cover z-20" />
                    <div className="lg:h-[600px] lg:w-[400px] h-80 w-full absolute lg:top-10 lg:left-10 top-2 left-2 border-2 border-neutral/40 z-0"/>
                </div>
                <div className="flex flex-col justify-center items-start gap-5 lg:w-1/3 w-full max-lg:px-2">
                    <h3 className="text-secondary font-semibold">Master of the Craft</h3>
                    <h2 className="text-primary font-notoserif text-4xl">Chef Julian Valerius</h2>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className="text-primary/80 ">"Gastronomy is not merely about taste; it is about capturing a moment in time and space. At Lumina, we don't just serve meals; we translate the light of the coast into a sensory experience."</p>
                    <div className="flex justify-between items-center">
                        <div className="lg:w-52 w-fit">
                            <h3 className="text-primary font-semibold">Accolades</h3>
                            <p className="text-primary/80">Three Michelin Stars Innovator of the Year</p>
                        </div>
                        <div className="lg:w-52 w-fit">
                            <h3 className="text-primary font-semibold">Philosophy</h3>
                            <p className="text-primary/80">Elemental Simplicity Technological Mastery</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}