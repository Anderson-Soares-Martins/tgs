import { BooksDomain, BooksQueries, BooksMutations } from './books/Domain/index.js'

const typeDefs = 
`#graphql

    ${BooksDomain}

    type Query {
        ${BooksQueries}
    }

    type Mutation {
        ${BooksMutations}
    }

`

export { typeDefs }