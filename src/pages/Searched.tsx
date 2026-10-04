import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { searchMovies, type Movie } from "../API/tmdb"
import MovieCard from "../components/MovieCard"

const Searched = () => {
    const [searchParams] = useSearchParams()

    const query = searchParams.get("query") ?? ""

    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        if (!query) return;

        async function getMovies() {
            try {
                setLoading(true)
                setError("")

                const results = await searchMovies(query)

                setMovies(results)
            } catch (error) {
                console.error("Search error:", error)
                setError("Failed to load movies.")
            } finally {
                setLoading(false)
            }
        }

        getMovies()
    }, [query])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <main className="bg-[#131317] min-h-[calc(100dvh-4rem)] px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="mb-6 text-xl text-white sm:text-2xl">
                Search results for "{query}"
            </h1>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </div>
        </main>
    )
}

export default Searched

