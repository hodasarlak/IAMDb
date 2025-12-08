import { useParams } from "react-router"
import { useFavorites } from "../context/FavoritesContext"
import { useEffect } from "react"
import { movieById } from "../services/movie"
import { useState } from "react"

const MovieDetails = () => {
  const { toggleFavorite, isFavorite } = useFavorites()
  const [movie, setMovie] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const a = async () => {
      setMovie(await movieById(id))
    }
    a()
  }, [id])

  if (!movie) return (<>Loading...</>)

  return (
    <div>
      Movie Card
      <button
        onClick={() => toggleFavorite(movie.id)}
        className={isFavorite(movie.id) ? "favorite active" : "favorite"}
      >
        {isFavorite(movie.id) ? "❤️" : "🤍"}
      </button>
    </div>
  )
}

export default MovieDetails
