const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    double(number: Int): Int
  }
`;

module.exports = typeDefs;
