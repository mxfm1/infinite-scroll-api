'use client'

import { ArrowLeft, ArrowRight } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

type PaginationControlProps ={
    hasPrevPage:boolean
    hasNextPage:boolean
}

export default function PaginationControl(
    {hasPrevPage,hasNextPage}:PaginationControlProps
){

    const searchParams = useSearchParams()
    const router = useRouter()

    const page = searchParams.get('page') ?? 1
    const itemsPerPage = searchParams.get('quantity') ?? 4


    return(
        <div className="flex items-center justify-center bg-red-400 w-full gap-9">
            <div>
            <button
                className="flex"
                onClick={() => {
                    router.push(`/characters/?page=${Number(page) -1}`)
                }}
                disabled={!hasPrevPage}
                >   
                    <ArrowLeft />
                    prev
                </button>
            </div>

            <div>
                <button className="flex"
                    onClick={() => {
                        router.push(`/characters/?page=${Number(page)+1}`)
                    }}
                    disabled={!hasNextPage}
                >
                    next
                    <ArrowRight />
                </button>
            </div>
        </div>
    )
}