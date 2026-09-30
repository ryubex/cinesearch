import { useState } from "react"

import { Bookmark } from "lucide-react"

export default function Navbar() {

    const [loading, setLoading] = useState(false)
    return (
        <nav className="min-w-screen flex flex-row justify-between">
            <link className="text-[#E4E1E8] text-2xl text-center font-serif font-medium">
                Cine<span className="text-[#D0A46C] italic">Search</span>            
            </link>
            
            <div className="gap-8">
                <Bookmark size={16} className={`${loading ? "animate-pulse" : ""} text-[#E4E1E8]`}/>
            </div>
        </nav>
    )
}