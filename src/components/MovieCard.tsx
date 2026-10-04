import { Bookmark } from "lucide-react"

import type { Movie } from "../API/tmdb";
import { genres } from "../genre"

interface MovieCardProps {
    movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
    return (
        <div className="flex h-[350px] w-[180px] flex-col overflow-hidden rounded-2xl bg-[#1b1b20] text-white shadow-2xl">

            {/* Movie Poster */}
            <div className="relative aspect-[2/3] w-full shrink-0 overflow-hidden">
                <img
                    src={
                        movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "/placeholder.jpg"
                    }
                    alt={movie.title}
                    className="h-full w-full object-cover"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80">

                    {/* Rating */}
                    <div className="absolute left-4 top-4 flex items-center gap-1.5">
                        <span className="text-lg text-amber-200">⭐</span>
                        <span className="text-sm font-semibold">
                            {movie.vote_average.toFixed(2)}
                        </span>
                    </div>

                    {/* Bookmark */}
                    <button className="absolute right-4 top-4 rounded-full bg-black/30 p-2 backdrop-blur-sm">
                        <Bookmark size={20} />
                    </button>
                </div>
            </div>

            {/* Metadata */}
            <div className="flex min-h-0 flex-1 flex-col px-4 py-3">
                
                <div className="flex items-start gap-2 text-xs">
                    <span className="shrink-0 font-bold text-amber-400">
                        {movie.release_date}
                    </span>

                    <span className="text-white/40">•</span>

                    <span className="min-w-0 truncate text-white/60">
                        Sci-Fi / Mystery
                    </span>
                </div>

                <h4 className="mt-2 line-clamp-2 overflow-hidden font-serif text-lg leading-tight">
                    {movie.title}
                </h4>
            </div>
        </div>
    )
}
