import { ApolloError } from 'apollo-server'
import { Books } from './Books/Application/Queries/Books.js'
import { MargeBook } from './Books/Application/Mutations/MargeBook.js'
import { Book } from './Books/Application/Chains/Book.js'

const resolvers = {
    Query: {
        Books,
    },
    Mutation: {
        MargeBook,
    },
    Book,
}

export { resolvers }