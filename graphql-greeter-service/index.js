const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT }).then(() =>
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${process.env.PORT}
    📭  Query at https://studio.apollographql.com/dev
    `)
);
