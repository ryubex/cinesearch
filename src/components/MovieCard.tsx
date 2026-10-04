import { Bookmark } from "lucide-react"

import type { Movie } from "../API/tmdb"

interface MovieCardProps {
    movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
    return (
        <article className="min-w-0 overflow-hidden rounded-2xl bg-[#1b1b20] text-white shadow-2xl">

            {/* Poster */}
            <div className="relative aspect-2/3 w-full overflow-hidden">
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
                <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/80">

                    {/* Rating */}
                    <div className="absolute left-3 top-3 flex items-center gap-1">
                        <span className="text-lg text-amber-200">
                            ⭐
                        </span>

                        <span className="text-xs font-semibold sm:text-sm">
                            {movie.vote_average.toFixed(2)}
                        </span>
                    </div>

                    {/* Bookmark */}
                    <button
                        className="absolute right-3 top-3 rounded-full bg-black/30 p-2 backdrop-blur-sm"
                        aria-label={`Bookmark ${movie.title}`}
                    >
                        <Bookmark size={18} />
                    </button>
                </div>
            </div>

            {/* Metadata */}
            <div className="min-w-0 p-3 sm:p-4">

                {/* Date & Genre */}
                <div className="flex min-w-0 items-center gap-1.5 text-xs">
                    <span className="shrink-0 font-bold text-amber-400">
                        {movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}
                    </span>

                    <span className="shrink-0 text-white/40">
                        •
                    </span>

                    <span className="truncate text-white/60">
                        Sci-Fi / Mystery
                    </span>
                </div>

                {/* Title */}
                <h4 className="mt-2 line-clamp-2 font-serif text-base leading-tight sm:text-lg">
                    {movie.title}
                </h4>
            </div>
        </article>
    )
}
