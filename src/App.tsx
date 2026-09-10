import { useEffect, useState } from 'react'
import { motion, moveItem } from "framer-motion"
import { Search } from "lucide-react"

import { genres } from './genre'
import { searchMovies, type Movie } from './API/tmdb'


function App() {

  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [movie, setMovie] = useState<Movie | null>(null)

  
  { /*  FOR TESTING API
    async function testTMDB() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDM3MWMxZWU4ZDZiNzY4OTcyYjg0YWY5YjBmYzcwNSIsIm5iZiI6MTc4ODE3MDkyMC41OTM5OTk5LCJzdWIiOiI2YTk1NTJhOGRjYjdkYmZiODE1YWU0OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ow3OqqRCtVnKE8iQNPH5j1lGb6Ne1RpWnfIuKHzpdpk'
      }
    };

    fetch('https://api.themoviedb.org/3/search/movie?query=Avatar', options)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err));

  }

    testTMDB();
  */ }


    {/* API Usage */}
  const searchMovie = async (query:string) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch (
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDM3MWMxZWU4ZDZiNzY4OTcyYjg0YWY5YjBmYzcwNSIsIm5iZiI6MTc4ODE3MDkyMC41OTM5OTk5LCJzdWIiOiI2YTk1NTJhOGRjYjdkYmZiODE1YWU0OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ow3OqqRCtVnKE8iQNPH5j1lGb6Ne1RpWnfIuKHzpdpk`
          }
        }
      )

      if (!response.ok) {
        setError("Failed to fetch movies")
        setMovie([])
        return
      }

      const data = await response.json()

      setMovie(data.results)
    } catch (error) {
      setError("Failed to connect to the movie service.")
    } finally {
      setLoading(false)
    }
  }

  {/* For user search */}

  const handleSearch = () => {
    if(!query) return
    setMovie(query)
    searchMovie(query)
    setQuery
  }

  {/* For fetching movie genres */}
  const genreNames = movie.genre_ids?.map((id) = genres.find((genre) => genre.id === id)?.name).filter(Boolean)

  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-[#0B0D12]'>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='bg-white rounded-2xl p-6 w-170 shadow-2xl'
        >

          {/* HEADER */}
          <div className='flex justify-end smb-6'>
            <input 
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter"}
              placeholder='Search...'
              className='px-3 py-1 rounded-full border text-sm outline-none
                focus:ring-2 focus:ring-blue-200 w-48 focus:2-32 transition-all' 
            />

            <button
              className='bg-blue-100 p-2 rounded-full hover:scale-100 transition
              shrink-0'
              disabled={loading}
            >
              <Search 
                size={16} 
                className={ loading ? "animate-pulse" : "" }
              />
            </button>
          </div>

          {/* Main Content */}
          <div 
            className='relative bg-cover bg-center'
            style = {{ 
              backgroundImage = `url(gttps://image.tmdb.org/t/p/original${movie.backrdop_path})` 
            }}
          >

            { /* Dark overlay */}
            <div className='absolute inset-0 bg-black/60' />

            {/* Content */}
            <div className='relative flex gap-8 p-8'>

              {/* Movie Image */}
              <div className='w-48 shrink-0'>
                <img 
                  src = { `https://image.tmdb.org/t/p/w500${movie.poster_path}` }  
                  alt = {movie.title}
                  className='w-full rounded-lg' 
                />
              </div>

              {/* Movie Details */}
              <div className='flex-1 text-white'>

                {/* Title */}
                <h1 className='text-4xl font-bold'>
                  {movie.title}
                </h1>

                {/* Metadata */}
                <div className='mt-4 flex items-center gap-3'>
                  <span>⭐ {movie.vote_average}/10</span>
                  <span>•</span>
                  <span>{movie.release_date?.slice(0, 4)}</span>
                  <span>•</span>
                  <span>{genreNames?.join(", ")}</span>
                  <span>{movie.runtime}</span>
                </div>
              </div>
            
              {/* Overview */}
              <div className='mt-0 space-y-4'>
                <p className='bg-black/70 p-3'>
                  {movie.overview}
                </p>

              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </>
  )
}

export default App
