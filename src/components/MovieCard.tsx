import type { Movie } from "../API/tmdb";

interface MovieCardProps {
    movie: Movie
}

export default function MovieCard ({ movie }: MovieCardProps) {
    return (
        <div className="w-[65] overflow-hidden rounded-2xl bg-[#1b1b20] text-white shadow-2xl">
            {/* Movie Poster */}

            <div className="relative h-[97.5] overflow-hidden">
                <img 
                    src={
                        movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "/placeholder.jpg"
                    } 
                    alt={movie.title} 
                />

                {/* Background Color */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80">
                    
                    {/* Rating */}
                    <div className="absolute left-5 top-4 flex items-center gap-1.5">
                        <span className="text-xl text-amber-200">⭐</span>
                        <span className="text-sm font-semibold">{movie.vote_average}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}