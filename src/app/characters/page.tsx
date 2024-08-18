import PaginationControl from "./_components/pagination-control"

export default function CharactersPage({
    searchParams}:{
        searchParams: {[key: string]: string | string[] | undefined}
    }){

        const data = [
            {id:"1",label: "item1"},
            {id:"2",label: "item2"},
            {id:"3",label: "item3"},
            {id:"4",label: "item4"},
            {id:"5",label: "item5"},
            {id:"6",label: "item6"},
            {id:"7",label: "item7"},
            {id:"8",label: "item8"},
            {id:"9",label: "item9"},
            {id:"10",label: "item10"},
            {id:"11",label: "item11"},
            {id:"12",label: "item12"},
        ]
        const page = searchParams['page'] ?? 1
        const quantity = searchParams['items'] ?? 4

        const initial = (Number(page) - 1) * Number(quantity)
        const end = initial + Number(quantity)

        const dataPerPage = data.slice(initial,end)

        console.log(dataPerPage)
    return(
        <div className="bg-slate-300">
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col items-center w-[200px]">
                    {dataPerPage.map((data) => (
                        <div>
                            <h1>{data.label}</h1>
                        </div>
                    ))}
                    <PaginationControl 
                        hasNextPage={end < data.length}
                        hasPrevPage={initial > 0}
                    />
                </div>
            </div>
            
        </div>
    )
}