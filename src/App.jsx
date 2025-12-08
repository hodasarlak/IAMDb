import search from "./assets/images/search.svg"
import voicesearch from "./assets/images/voicesearch.svg"
import logo from "./assets/images/logo.svg"
import CategoryFilter from "./components/CategoryFilter"

const App = () => {
  return (
    <div className="bg flex justify-center">
      <div className="w-4xl h-screen text-white flex flex-col gap-8 items-center justify-center">
        <img src={logo} alt="لوگو" />
        <div className="bg-slate-800 h-12 rounded-2xl px-4 flex gap-2 w-full">
          <button className="search-icon-btn">
            <img src={search} />
          </button>
          <input type="search" className="grow" />
          <button className="search-icon-btn">
            <img src={voicesearch} className="border-l-2  border-black pl-3" />
          </button>
        </div>
        <CategoryFilter />
      </div>
    </div>
  )
}
export default App
