const TMDB_API_URL = "https://api.themoviedb.org/3"

const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN

if (!TMDB_ACCESS_TOKEN) {
    throw new Error("Missing VITE_TMDB_ACCESS_TOKEN environment variable")
}

export interface Movie {
    id: number
    title: string
    overview: string
    poster_path: string | null
    backdrop_path: string | null
    release_date: string
    vote_average: number
    genre_ids: number[]
}

interface MovieSearchResponse {
    results: Movie[]
}

export async function searchMovies(query:string): Promise<Movie[]> {
    const response = await fetch(
        `{TMDB_API_URL}/search/movie?query=${encodeURIComponent(query)}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`
            }
        }
    )

    if (!response.ok) {
        const errorData = await response.text()

        console.error("TMDB error:", response.status, errorData)

        throw new Error(
            `TMDB request failed: ${response.status}`
        )
    }

    const data: MovieSearchResponse = await response.json()

    return data.results
}