import type { Movie } from "../API/tmdb";

interface MovieCardProps {
    movie: Movie
}

export default function MovieCard ({ movie }: MovieCardProps) {
    return (
        <article>
            <img 
                src={
                    movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/placeholder.jpg"
                } 
                alt={movie.title} 
            />

            <h2>{movie.title}</h2>

            <p>{movie.release_date}</p>
            <p>⭐ {movie.vote_average}</p>
        </article>
    )
}