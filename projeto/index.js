const { ApolloServer, gql } = require('apollo-server'); 

const typeDefs = gql`
    # Pontos de entrada da sua API!
    type Query { 
        ola: String
    }
` 

const resolvers = {
    Query: {
        ola() {
            return 'Bom diaa';
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then(({url}) => {
    console.log(`Executando em ${url}`); 
})