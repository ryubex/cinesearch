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
        <main>
            <h1>Search results for "{query}"</h1>

            <div>
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

