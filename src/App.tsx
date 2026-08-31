import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
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

    fetch('https://api.themoviedb.org/3/search/movie?query=Inception', options)
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

          {/* Main Content */}
          <div className=''>

            {/* Movie Image */}
            <div className=''>

            </div>

            {/* Movie Details */}
            <div className=''>

            </div>
          </div>

        </motion.div>
      </div>
    </>
  )
}

export default App
