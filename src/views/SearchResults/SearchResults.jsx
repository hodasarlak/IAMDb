import { useState } from "react"
import Search from "../../components/Search/Search"
import { useEffect } from "react"
import { Result } from "../../services/category"

const SearchResults = () => {
  const [res, setRes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setRes(await Result())
    }
    fetchData()
  }, [])

  return (
    <div className="bg h-screen py-12.5 px-45 flex flex-col gap-8">
      <div className="container">
        <div className="flex">
          <button className="bg-slate-800 p-2.5 rounded-2xl text-white">
            left{" "}
          </button>
          <div className="grow text-center">
            <p className="text-white font-bold">Result</p>
            <p className="text-gray-400">for "Search Query"</p>
          </div>
        </div>
      </div>
      <Search />
      <div className="text-white">Result</div>
    </div>
  )
}

export default SearchResults
