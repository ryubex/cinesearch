import { useState } from "react"
import { Link } from "react-router-dom"

import { Bookmark, CircleUserRound } from "lucide-react"

export default function Navbar() {

    const [loading, setLoading] = useState(false)
    return (
        <nav className="min-w-screen flex flex-row justify-between">
            <Link className="text-[#E4E1E8] text-2xl text-center font-serif font-medium">
                Cine<span className="text-[#D0A46C] italic">Search</span>            
            </Link>
            
            <div className="gap-8">
                <Link>
                    <Bookmark 
                        size={16} 
                        className={`${loading ? "animate-pulse" : ""} text-[#E4E1E8]`}
                    />
                </Link>
                
                <Link>
                    <CircleUserRound 
                        size={16} 
                        className={`${loading ? "animate-pulse" : ""} text-[#E4E1E8]`}
                    />
                </Link>

            </div>
        </nav>
    )
}