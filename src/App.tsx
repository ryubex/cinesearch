import { useState } from 'react'
import { motion } from "framer-motion"
import { Search } from "lucide-react"

function App() {

  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [] = useState() 

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
            className='px-3 py-1 rounded-full border text-sm outline-none
              focus:ring-2 focus:ring-blue-200 w-24 focus:2-32 transition-all' 
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

        </motion.div>

      </div>
    </>
  )
}

export default App
