import { gql } from "apollo-boost";

const GET_CART_ITEMS = gql`
  query GetUsers {
    users @client
  }
`;

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    users: [Launch]!
  }
  extend type Launch {
    isInUser: Boolean!
  }
  extend type Mutation {
    addOrRemoveUser(id: ID!): [Launch]
  }
`;

export const resolvers = {
  Launch: {
    isInUser: (launch, _, { cache }) => {
      const { users } = cache.readQuery({ query: GET_CART_ITEMS });
      return users.includes(launch.id);
    }
  },
  Mutation: {
    addOrRemoveUser: (_, { id }, { cache }) => {
      const { users } = cache.readQuery({ query: GET_CART_ITEMS });
      const data = {
        users: users.includes(id) ? users.filter(i => i !== id) : [...users, id]
      };
      cache.writeQuery({ query: GET_CART_ITEMS, data });
      return data.users;
    }
  }
};
