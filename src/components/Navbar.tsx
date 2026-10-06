import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { Bookmark, CircleUserRound, Search } from "lucide-react"

export default function Navbar() {

    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const handleSearch = async () => {
      if (!query.trim()) return
      navigate(`/search?query=${encodeURIComponent(query.trim())}`)
    }

    return (
        <nav className="min-w-screen h-16 flex flex-row items-center 
            justify-between p-4 px-6 bg-[#1e1e22] relative"
        >
            <NavLink
                to="/"
                className="text-[#E4E1E8] text-2xl text-center font-serif font-medium"
            >
                    Cine<span className="text-[#D0A46C]">Search</span>            
            </NavLink>
            
            <div className="flex flex-row gap-6 items-center">
                <div className="flex flex-row items-center">
                    <Search size={16} className={`${loading ? "animate-pulse" : ""} text-[#D0A46C]`}/>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSearch()
                    }}>
                        <input 
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch()
                        }
                        }}
                        placeholder='Search for a movie...'
                        className='px-3 py-1 text-sm outline-none w-90 focus:2-32 transition-all
                        text-white placeholder:text-[#817466]' 
                    />
                    </form>
                </div>
                

                <NavLink
                    to="/saved"
                >
                    {({ isActive }) => (
                        <Bookmark
                            size={24}
                            className={
                                isActive
                                ? "text-[#1e1e22]"
                                : "text-[#E4E1E8]"
                            }
                        />
                    )}
                    
                </NavLink>
                
                <NavLink
                    to="/login"
                >
                    {({ isActive }) => (
                        <CircleUserRound
                            size={24}
                            className={
                                isActive
                                ? "text-[#1e1e22]"
                                : "text-[#E4E1E8]"
                            }
                        />
                    )}
                </NavLink>

            </div>
        </nav>
    )
}