const BooksDomain = `
    type Book{
        id: ID!
        name: String!
        year: Int!
        author: Author
    }

    type Author {
        id: ID!
        name: String!
        age: Int!
    }
`
const BooksQueries = `
    Books(
        id: ID
    ): [Book]
`
const BooksMutations = `
    MargeBook
    (
        id: ID!
        name: String!
        year: Int!
    ): [Book]
`

export { BooksDomain, BooksQueries, BooksMutations }