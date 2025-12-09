const category = async () => {
  const res = await fetch("https://moviesapi.codingfront.dev/api/v1/genres")
  const response = await res.json()
  return response.map((item) => ({ id: item.id, title: item.name }))
}

const categoryById = async (id) => {
  const categories = await category()
  const result = categories.filter((item) => +id === item.id)
  return result.length === 1 ? result[0] : undefined
}

export { category, categoryById }
