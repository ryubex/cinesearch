import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

import { Bookmark, CircleUserRound } from "lucide-react"

export default function Navbar() {

    const [loading, setLoading] = useState(false)
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
            
            <div className="flex flex-row gap-6">
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