import Apollo from 'apollo-server'
import { schema } from '../../schemas/schema.js'
import {shared} from '../../shared/index.js'

const server = new Apollo.ApolloServer({
    schema,
    context: ({req}) => {
        return {
            ...shared
        }
    },
    formatError: (error) => {
        delete error.extensions.exception.stacktrace
        const errorlog = {
            message: error.message,
            code: error.extensions.code,
            detail: error.extensions.exception ? error.extensions.exception : null,
            path: error.path ? error.path[0] : null,
        }
        return errorlog
    },
    formatResponse: (data) => data,
})

server.init = () => {
    server.listen(process.env.PORT || 3000, '0.0.0.0').then(() => {
        console.log(`Server is listening on port 3000`)
    })
}

export { server }