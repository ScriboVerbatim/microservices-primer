const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    message(name: String): String
  }
`;

const resolvers = {
  Query: {
    message: (_, { name }, __) => "Hello " + name,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// const app = express();
// server.applyMiddleware({ app });

server
  .listen()
  .then(() =>
    console.log(`? Server ready at http://localhost:4000${server.graphqlPath}`)
  );
