import { useEffect, useState } from 'react'
import { motion, moveItem } from "framer-motion"
import { Search } from "lucide-react"

function App() {

  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)

  
  
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


          
          
          {/*<div 
            className='relative bg-cover bg-center'
            style = {{ 
              backgroundImage = `url(gttps://image.tmdb.org/t/p/original${movie.backrdop_path})` 
            }}
          >

            
            <div className='absolute inset-0 bg-black/60' />

            
            <div className='relative flex gap-8 p-8'>

              
              <div className='w-48 shrink-0'>
                <img 
                  src = { `https://image.tmdb.org/t/p/w500${movie.poster_path}` }  
                  alt = {movie.title}
                  className='w-full rounded-lg' 
                />
              </div>

              
              <div className='flex-1 text-white'>

                
                <h1 className='text-4xl font-bold'>
                  {movie.title}
                </h1>

                
                <div className='mt-4 flex items-center gap-3'>
                  <span>⭐ {movie.vote_average}/10</span>
                  <span>•</span>
                  <span>{movie.release_date?.slice(0, 4)}</span>
                  <span>•</span>
                  <span></span>
                </div>

              </div>
          
            </div>
          </div>*/}

        </motion.div>
      </div>
    </>
  )
}

export default App
