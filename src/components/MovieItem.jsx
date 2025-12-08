import { Link } from "react-router"
import { useFavorites } from "../context/FavoritesContext"

const MovieItem = ({ item }) => {
  const { toggleFavorite, isFavorite } = useFavorites()

  return (
    <div>
      Movie Item <Link to={`/movie/${item.id}`}>{item.title}</Link>
      <button
        onClick={() => toggleFavorite(item.id)}
        className={isFavorite(item.id) ? "favorite active" : "favorite"}
      >
        {isFavorite(item.id) ? "❤️" : "🤍"}
      </button>
    </div>
  )
}

export default MovieItem
