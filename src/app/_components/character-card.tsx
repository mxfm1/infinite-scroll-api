import { MotionDiv } from "@/components/motion-div";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Location ={
    name: string,
    url: string
}

export type CharacterCardProps = {
    id: number
    name: string
    status: 'Alive' | 'Dead' | 'unknown'
    species: string
    type: string
    location: Location
    episode: string[]
    image: string
    gender: string
    index: number
}

export default function CharacterCard({
    id,
    name,
    status,
    species,
    type,
    image,
    gender,
    location,
    episode,
    index
}:CharacterCardProps){
    return(
        <MotionDiv 
            className="bg-customGray shadow-xl rounded-xl hover:scale-105 transition"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                delay:index * 0.25,
                ease: "easeInOut",
                duration: 0.5
            }}
            >
            <div className="flex flex-col sm:flex-row gap-5">
                <div className="relative flex-1">
                    <Image
                        alt="char-img"
                        src={image}
                        fill
                        className="absolute xs:rounded-t-xl sm:rounded-l-xl h-full object-cover"
                        priority={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="w-[60%] p-3">
                    <h1 className="text-2xl text-white">{name}</h1>
                    <div className="flex items-center space-x-2 text-white">
                        <div className={cn(
                            "w-2 h-2 rounded-full", 
                            status === 'Alive' && "bg-green-700",
                            status === 'Dead' && "bg-red-600",
                            status === 'unknown' && "bg-slate-300"
                        )}/>
                       
                        <p>{status} - {species}</p>
                    </div>

                    <div className="mt-6">
                        <p className="text-slate-300 text-md font-[300]">Last know location</p>
                        <h1 className="text-white text-lg">{location.name}</h1>
                    </div>
                    
                    <div className="mt-6">
                        <p className="text-slate-300">First seen in:</p>
                        <h1 className="text-white">{episode}</h1>
                    </div>
                </div>
            </div>
        </MotionDiv>
    )
}