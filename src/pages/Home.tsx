import { useEffect, useState } from 'react'
import { motion, moveItem } from "framer-motion"
import { Search } from "lucide-react"
import { useNavigate } from 'react-router-dom'

import { genres } from '../genre'
import { searchMovies, type Movie } from '../API/tmdb'


const Home = () => {

  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [movie, setMovie] = useState<Movie[]>([])
  
  const navigate = useNavigate()

  
    {/* API Usage */}
    const handleSearch = async () => {
      if (!query.trim()) return
      navigate(`/search?query=${encodeURIComponent(query.trim())}`)
    }

  {/* For fetching movie genres */}
  const genreNames = movie.genre_ids?.map((id) = genres.find((genre) => genre.id === id)?.name).filter(Boolean)

  return (
    <>
      <div className='min-h-[calc(100dvh-4rem)] flex flex-col items-center justify-center gap-8 bg-[#131317] overflow-hidden'>
        <div className='flex flex-col items-center'>
          <p className='text-[#E4E1E8] text-3xl text-center font-serif font-medium w-70'>
            Discover your next  
            <span className='text-[#D0A46C] italic'> cinematic</span> obsession
          </p>
        
          <p className='text-[#CED1E4] text-center text-xs w-50'>
            Find your next favorite film, hidden gem,or cinematic masterpiece.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='bg-[#28272B] rounded-2xl p-4 w-112.5 shadow-2xl 
            flex flex-row items-center gap-2'
        >
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

        </motion.div>
      </div>
    </>
  )
}

export default Home
