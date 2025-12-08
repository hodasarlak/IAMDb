import search from "../assets/images/search.svg"
import voicesearch from "../assets/images/voicesearch.svg"
import { useState } from "react"
import { useEffect } from "react"
import { movie } from "../services/movie"
import { useSearchParams } from "react-router"
import { categoryById } from "../services/category"
import MovieItem from "../components/MovieItem"

const SearchResults = () => {
  const [movies, setMovies] = useState([])
  const [searchParams] = useSearchParams()
  const [text, setText] = useState("")
  const categoryId = searchParams.get("categoryId")
  const query = searchParams.get("query")

  useEffect(() => {
    const fetchData = async () => {
      const res = await categoryById(categoryId)
      setText(query || res.title)
      setMovies(await movie(categoryId, query))
    }
    fetchData()
  }, [categoryId, query])

  return (
    <div className="bg h-screen py-12.5 px-45 flex flex-col gap-8">
      <div className="container">
        <div className="flex">
          <button className="bg-slate-800 p-2.5 rounded-2xl text-white">
            &lt;
          </button>
          <div className="grow text-center">
            <p className="text-white font-bold">Result</p>
            <p className="text-gray-400">for "{text}"</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 h-12 rounded-2xl px-4 flex gap-2 w-full">
        <button className="search-icon-btn">
          <img src={search} />
        </button>
        <input type="search" className="grow" value={text} />
        <button className="search-icon-btn">
          <img src={voicesearch} className="border-l-2  border-black pl-3" />
        </button>
      </div>
      <div className="text-white">
        {movies.map((item) => (
          <MovieItem item={item} />
        ))}
      </div>
    </div>
  )
}

export default SearchResults
