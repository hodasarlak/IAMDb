import { faker } from "@faker-js/faker"

const category = (showMore = false) => {
  // MOCK DATA
  // TODO: CALL THE API
  // fetch("http://localhost:8080/api/v1/category")
  if (showMore) {
    return Promise.resolve([
      {
        id: 1,
        title: "Action",
      },
      {
        id: 2,
        title: "Biography",
      },
      {
        id: 3,
        title: "Crime",
      },
      {
        id: 4,
        title: "Drama",
      },
      {
        id: 5,
        title: faker.string.alpha(10),
      },
    ])
  }

  return Promise.resolve([
    {
      id: 1,
      title: "Action",
    },
    {
      id: 2,
      title: "Biography",
    },
    {
      id: 3,
      title: "Crime",
    },
    {
      id: 4,
      title: "Drama",
    },
  ])
}

const categoryById = (id) => {
  // MOCK DATA
  // TODO: CALL THE API
  // fetch("http://localhost:8080/api/v1/category")
  const result = [
    {
      id: 1,
      title: "Action",
    },
    {
      id: 2,
      title: "Biography",
    },
    {
      id: 3,
      title: "Crime",
    },
    {
      id: 4,
      title: "Drama",
    },
    {
      id: 5,
      title: faker.string.alpha(10),
    },
  ].filter((item) => +id === item.id)
  return result.length === 1 ? result[0] : undefined 
}


export { category , categoryById }
