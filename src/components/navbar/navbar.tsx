import Image from "next/image"

export default function Navbar(){
    return(
        <div className="flex h-[80px] bg-customGray text-white">
            <div className="flex items-center h-full w-[40%] px-4 ">
                <Image 
                    src="/logo/main-logo.svg"  
                    width={60}
                    height={60}
                    alt="brand-logo"  
                    style={{}}
                />
            </div>
            <div className="flex flex-1 px-4">
                <div className="ml-auto flex items-center">
                    <ul className="flex justify-center gap-x-10">
                        <li>Inicio</li>
                        <li>Personajes</li>
                        <li>Nosotros</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}