import logo from "./assets/images/logo.svg"
import CategoryFilter from "./components/CategoryFilter/CategoryFilter.jsx"
import Search from "./components/Search/Search.jsx"
const App = () => {
  return (
    <div className="bg flex justify-center">
      <div className="w-4xl h-screen text-white flex flex-col gap-8 items-center justify-center">
        <img src={logo} alt="لوگو" />

        <Search />
        <CategoryFilter />
      </div>
    </div>
  )
}
export default App
