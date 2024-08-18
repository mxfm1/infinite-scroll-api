'use server'

// const apiURL = 'https://rickandmortyapi.com/api'

// export const fetchData = async(page:number) => {
//     const response = await fetch(`${apiURL}/character?page=${page}`)
//     const data = await response.json()
//     const characters = data.results

//     const characterEpisodesData = characters.map(character => {
//         let firstEpisodeId = character.episode[0].split("/").pop()
//         return fetch(`${apiURL}/episode/${firstEpisodeId}`).then(response => response.json())
//     })

//     const episodes = await Promise.all(characterEpisodesData);

//     const combinedData = characters.map((character:any) => {
//         const firstEpisodeId = character.episode[0].split("/").pop()
//         const episode = episodes.find(e => e.id === Number(firstEpisodeId))

//         return {
//             id: character.id,
//             name: character.name,
//             status: character.status,
//             species: character.species,
//             type: character.type,
//             gender: character.gender,
//             origin: character.origin,
//             location: character.location,
//             image: character.image,
//             episode: character.episode,
//             firstEpisodeName: episode ? episode.name : 'Unknown'
//         }

//     })
//     return combinedData
// }

const apiBaseURL= 'https://rickandmortyapi.com/api'

export const testFetchData = async(page:number) => {
    try{
        const response = await fetch(`${apiBaseURL}/character?page=${page}`)
        const data = await response.json()
        const characterData = data.results
    
        const getCharacterFirstEpisodeData = characterData.map((charac:any) => {
            let firstEpisodeId = charac.episode[0].split("/").pop()
            return fetch(`${apiBaseURL}/episode/${firstEpisodeId}`).then(response => response.json())
        })

        const episodesData = await Promise.all(getCharacterFirstEpisodeData)
        const uniqueEpiosdesData = Array.from(new Set(episodesData))
        
        const finalData = characterData.map((character:any)=> {
            const firstChapterId = character.episode[0].split("/").pop()
            const matchingEpisode = uniqueEpiosdesData.find(e => e.id === Number(firstChapterId))
            return {
                id: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
                type: character.type,
                gender: character.gender,
                origin: character.origin,
                location: character.location,
                image: character.image,
                episode: character.episode,
                firstEpisodeName: matchingEpisode ? matchingEpisode.name : 'Unknown'
            }
        })
        return finalData
    }
    catch(error){
        throw new Error("Error getting the data")
    }

}