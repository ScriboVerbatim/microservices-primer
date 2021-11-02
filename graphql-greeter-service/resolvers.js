const resolvers = {
  Query: {
    message: (_, { name }, __) => "Hello " + name,
  },
};

module.exports = resolvers;
