const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
    accounts: [Account]
    account(id: ID!): Account!
  }
  type Mutation {
    createUser(email: String!, first_name: String!, last_name: String): User!
    createAccount(model: String, playlist: String, weights: String): Account!
    updateAccount(
      id: ID!
      model: String
      playlist: String
      weights: String
    ): Account!
    deleteAccount(id: ID!): Account!
  }
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
  }
  type Account {
    id: ID!
    model: String
    playlist: String
    weights: String
  }
`;

module.exports = {
  typeDefs
};
