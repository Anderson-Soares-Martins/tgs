import  {  makeExecutableSchema  }  from  '@graphql-tools/schema' ;
import { resolvers } from './tgs/resolvers.js'
import { typeDefs } from './tgs/typeDefs.js'

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export { schema }