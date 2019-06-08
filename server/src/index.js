const { ApolloServer } = require('apollo-server');
const { MemcachedCache } = require('apollo-server-cache-memcached');
const { Query } = require('./Query');
const { Mutation } = require('./Mutation');
const { typeDefs } = require('./schema');

const resolvers = { Query, Mutation };

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, connection }) => {
    if (connection) {
      // check connection for metadata
      return connection.context;
    }
    else {
      // check from req
      const token = req.headers.authorization || '';

      return { token };
    }
  },
  persistedQueries: {
    cache: new MemcachedCache(
      [ 'memcached-server-1', 'memcached-server-2', 'memcached-server-3' ],
      { retries: 10, retry: 10000 },
    ),
  },
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
