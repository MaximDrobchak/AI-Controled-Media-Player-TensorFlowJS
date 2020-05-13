const { typeDefs } = require("./schema");
const { Query } = require("./Query");
const { User } = require("./data/store");
const { Mutation } = require("./Mutation");
const { MemcachedCache } = require("apollo-server-cache-memcached");
const apolloServerKoa = require("apollo-server-koa");
const Koa = require("koa");

const app = new Koa();
const resolvers = {
  Query,
  Mutation
};

const server = new apolloServerKoa.ApolloServer({
  typeDefs,
  resolvers,
  context: async context => {
    console.log("context", context);
    console.log("context", context.ctx.request.header);
  },
  persistedQueries: {
    cache: new MemcachedCache(
      ["memcached-server-1", "memcached-server-2", "memcached-server-3"],
      { retries: 10, retry: 10000 }
    )
  }
});

server.applyMiddleware({ app });

app.listen(4000, error => {
  if (error) throw error;
  console.info(`🚀  Server ready at http://localhost:4000 .`);
});
