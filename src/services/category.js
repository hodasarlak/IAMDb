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
