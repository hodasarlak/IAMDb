const movie = () => {
  // MOCK DATA
  // TODO: CALL THE API
  // fetch("http://localhost:8080/api/v1/Result")
  return [
    {
      id: 1,
      title: "The Shawshink Redemption",
      year: 1994,
      country: "United State",
      category: [{ id: 1, title: "Drama" }],
      score: 9.3,
    },
    {
      id: 2,
      title: "The Godfather",
      year: 1972,
      country: "United State",
      category: [
        { id: 2, title: "Crime" },
        { id: 2, title: "Drama" },
      ],
      score: 9.2,
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      country: "United State",
      category: [
        { id: 3, title: "Crime" },
        { id: 3, title: "Drama" },
        { id: 3, title: "Action" },
      ],
      score: 9.0,
    },
    {
      id: 4,
      title: "The Godfather:Part||",
      year: 1974,
      country: "United State",
      category: [
        { id: 4, title: "Crime" },
        { id: 4, title: "Drama" },
      ],
      score: 9.0,
    },
    {
      id: 5,
      title: "12 Angry Man",
      year: 1957,
      country: "United State",
      category: [
        { id: 5, title: "Action" },
        { id: 5, title: "Drama" },
      ],
      score: 9.0,
    },
  ]
}

export { movie }
