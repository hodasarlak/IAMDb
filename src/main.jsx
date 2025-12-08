import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router"
import SearchResults from "./views/SearchResults"
import MovieDetails from "./views/MovieDetails"
import { FavoritesProvider } from "./context/FavoritesContext"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/result" element={<SearchResults />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
)
