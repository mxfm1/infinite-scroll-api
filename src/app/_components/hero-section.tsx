'use'

import { testFetchData } from "../actions";
import CharacterCard from "./character-card";
import LoadMore from "./load-more";

export default async function HeroSection(){

    let data = []
    let error = null

    try{
        data = await testFetchData(1)
    }
    catch(err){
        error = "Hubo un error al solicitar los datos. Porfavor intenta nuevamente. "
    }
    

    return(
        <div className="p-4 mx-12">
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-6 mb-2">
                {data.map((char:any, index:number) => (
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
                        key={char.id}
                        index={index}
                    />
                ))}
            </div>
            {error ? (
                <div className="flex items-center justify-center my-8">
                    <div className="bg-red-400 p-2">
                        <p className="text-red-700">{error}</p>
                    </div>
                </div>
            ): (
                <LoadMore />
            )}
        </div>
    )
}