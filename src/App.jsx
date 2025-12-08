import search from "./assets/images/search.svg"
import voicesearch from "./assets/images/voicesearch.svg"
import logo from "./assets/images/logo.svg"
import CategoryFilter from "./components/CategoryFilter"
import { useNavigate } from "react-router"
import { useState } from "react"

const App = () => {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState("")

  const iOnChange = (event) => {
    setSearchText(event.target.value)
  }

  const iOnKeyUp = (event) => {
    const value = event.target.value
    if (event.key === "Enter") {
      if (value.trim()) {
        setSearchText(value)
        navigate(`/result?query=${encodeURIComponent(value)}`)
      } else {
        // TODO: alert
      }
    }
  }

  const bOnClick = (event) => {
    event.preventDefault()
    if (searchText.trim()) {
      navigate(`/result?query=${encodeURIComponent(searchText)}`)
    } else {
      // TODO: alert
    }
  }

  return (
      <div className="bg flex justify-center">
        <div className="w-4xl h-screen text-white flex flex-col gap-8 items-center justify-center">
          <img src={logo} alt="logo" />
          <div className="bg-slate-800 h-12 rounded-2xl px-4 flex gap-2 w-full">
            <button className="search-icon-btn" onClick={bOnClick}>
              <img src={search} />
            </button>
            <input
              type="search"
              className="grow"
              onChange={iOnChange}
              onKeyUp={iOnKeyUp}
              value={searchText}
              placeholder="Search..."
            />
            <button className="search-icon-btn">
              <img
                src={voicesearch}
                className="border-l-2  border-black pl-3"
              />
            </button>
          </div>
          <CategoryFilter />
        </div>
      </div>
  )
}

export default App
