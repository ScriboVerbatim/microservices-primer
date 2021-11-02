const resolvers = {
  Query: {
    double: (_, { number }, __) => 2 * number,
  },
};

module.exports = resolvers;
