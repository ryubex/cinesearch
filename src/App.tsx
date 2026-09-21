import { useEffect, useState } from 'react'
import { motion, moveItem } from "framer-motion"
import { Search } from "lucide-react"

import { genres } from './genre'
import { searchMovies, type Movie } from './API/tmdb'


function App() {

  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [movie, setMovie] = useState<Movie[]>([])

  
    {/* API Usage */}
  const handleSearch = async () => {
    if (!query) return
    try {
      const movies = await searchMovies(query)

      setMovie(movies)
    } catch (error) {
      setError("Failed to connect to the movie service.")
    }
    setQuery("")
  }

  {/* For fetching movie genres */}
  const genreNames = movie.genre_ids?.map((id) = genres.find((genre) => genre.id === id)?.name).filter(Boolean)

  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-[#131317]'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='bg-[#28272B] rounded-3xl p-6 w-112.5 shadow-2xl'
        >
          
          {/* Content Text */}
          <div className=''>

          </div>

          <div className='bg-[#]'>

          </div>
        </motion.div>
      </div>
    </>
  )
}

export default App
