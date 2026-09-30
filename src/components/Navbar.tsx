import { useState } from "react"
import { Link } from "react-router-dom"

import { Bookmark, CircleUserRound } from "lucide-react"

export default function Navbar() {

    const [loading, setLoading] = useState(false)
    return (
        <nav className="min-w-screen flex flex-row items-center 
            justify-between p-4 px-6 bg-[#1e1e22] relative"
        >
            <Link className="text-[#E4E1E8] text-2xl text-center font-serif font-medium">
                Cine<span className="text-[#D0A46C]">Search</span>            
            </Link>
            
            <div className="flex flex-row gap-6">
                <Link>
                    <Bookmark 
                        size={24} 
                        className={`${loading ? "animate-pulse" : ""} text-[#E4E1E8]`}
                    />
                </Link>
                
                <Link>
                    <CircleUserRound 
                        size={24} 
                        className={`${loading ? "animate-pulse" : ""} text-[#E4E1E8]`}
                    />
                </Link>

            </div>
        </nav>
    )
}