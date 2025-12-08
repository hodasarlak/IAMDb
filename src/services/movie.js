import { faker } from '@faker-js/faker';

const category = (showMore = false) => {
  // MOCK DATA
  // TODO: CALL THE API
  // fetch("http://localhost:8080/api/v1/category")
  if (showMore) {
    return Promise.resolve([
      {
        id: 1,
        title: "Action"
      },
      {
        id: 2,
        title: "Biography"
      },
      {
        id: 3,
        title: "Crime"
      },
      {
        id: 4,
        title: "Drama"
      },
      {
        id: 5,
        title: faker.string.alpha(10)
      }
    ])
  }

  return Promise.resolve([
    {
      id: 1,
      title: "Action"
    },
    {
      id: 2,
      title: "Biography"
    },
    {
      id: 3,
      title: "Crime"
    },
    {
      id: 4,
      title: "Drama"
    }
  ])
}

export { category };


const Result = () => {
  // MOCK DATA
  // TODO: CALL THE API
  // fetch("http://localhost:8080/api/v1/Result")

  return ([
    {
      id: 1,
      title :"12 Angry Man",
      year: 1957,
      country: "United State",
      category: ["Action" , "Drama"],
      score: 9.0
    },
     {
      id: 2,
      title :"The Godfather:Part||",
      year: 1974,
      country: "United State",
      category: ["Crime" , "Drama"],
      score: 9.0
    },
    {
      id: 3,
      title :"The Dark Knight",
      year: 2008,
      country: "United State",
      category: ["Crime" , "Drama"],
      score: 9.1
    },

  ])
}

export { Result };


