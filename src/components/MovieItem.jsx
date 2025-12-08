import { Link } from "react-router"

const MovieItem = ({ item }) => {
  return (
    <div>
      Movie Item <Link to={`/movie/${item.id}`}>{item.title}</Link>
    </div>
  )
}

export default MovieItem
