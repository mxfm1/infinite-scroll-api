'use client'
import { useInView } from "react-intersection-observer"
import { Loader } from 'lucide-react'
import { useEffect, useState } from "react";
import {  testFetchData } from "../actions";
import CharacterCard, { CharacterCardProps } from "./character-card";

let page = 2
let pageSize = 0

console.log(pageSize)
export default function LoadMore(){
    const[data,setData] = useState<CharacterCardProps[]>([])
    const[isLoading,setIsLoading] = useState(false)
    const{ ref,inView } = useInView();
    
    useEffect(() => {
        if(inView && !isLoading){
            setIsLoading(true)
            testFetchData(page).then((res) => {
                pageSize = res.length;
                setData([...data,...res])
                setIsLoading(false)
                page++;
            })
        }
    },[inView, data])

    return(
        <>  
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-6 mb-2">
                {data.map((char:any,index) => {
                    const isNew = index >= data.length - 20

                    return(
                        <>
                            <CharacterCard
                                id={char.id}
                                name={char.name}
                                status={char.status}
                                species={char.species}
                                type={char.type}
                                location={char.location}
                                episode={char.firstEpisodeName}
                                image={char.image}
                                gender={char.gender}
                                key={index}
                                index={isNew ? index % 20 : 0}
                            />  
                        </>
                    )
                })}
            </div>
            <section className="flex items-center justify-center">
                <div ref={ref}>
                    <Loader className="animate-spin text-blue-500 w-8 h-8"/>
                </div>
            </section>
        </>
    )
}