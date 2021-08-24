import APS from 'appolo-server'

const errorHandling = (msg, code, error) => {
    throw new APS.ApolloError(msg, code, error)
}

export {errorHandling}