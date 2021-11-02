const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    message(name: String): String
  }
`;

module.exports = typeDefs;
