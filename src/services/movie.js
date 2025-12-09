import { categoryById } from "./category"

const movie = async (categoryId = undefined, query = undefined) => {
  if (categoryId) {
    const category = await categoryById(categoryId)
    const resG = await fetch(`https://moviesapi.codingfront.dev/api/v1/genres/${category.title}/movies`)
    const responseG = await resG.json()
    return responseG.data
  }

  if (query) {
    const resQ = await fetch(`https://moviesapi.codingfront.dev/api/v1/movies?q=${query}`)
    const responseQ = await resQ.json()
    return responseQ.data
  }

  const res = await fetch(`https://moviesapi.codingfront.dev/api/v1/movies`)
  const response = await res.json()
  return response.data
}

const movieById = async (id) => {
  const res = await fetch(`https://moviesapi.codingfront.dev/api/v1/movies/${id}`)
  const response = await res.json()
  return response.data
}

export { movie, movieById }
