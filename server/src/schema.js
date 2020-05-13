const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users(limit: Int, order: String, where: SequelizeJSON, offset: Int): [User]
    user(id: Int, where: SequelizeJSON): User
    account(id: Int, where: SequelizeJSON): Account
    accounts: [Account]
  }

  type Mutation {
    createUser(
      password: String
      username: String
      createdAt: String!
      updatedAt: String!
      email: String
    ): User
    updateUser(
      id: Int
      password: String
      username: String
      createdAt: String
      updatedAt: String
      email: String
    ): User
    deleteUser(id: Int!): GenericResponse
    createAccount(
      playlist: String
      model: String
      field5: Int
      field6: Int
    ): Account
    updateAccount(
      id: Int
      playlist: String
      model: String
      field5: Int
      field6: Int
    ): Account
    deleteAccount(id: Int!): GenericResponse
  }
  type Account {
    id: Int!
    playlist: String
    model: String
    field5: Int
    field6: Int
  }

  type GenericResponse {
    success: Boolean
  }

  scalar SequelizeJSON

  type User {
    id: Int!
    password: String
    username: String
    createdAt: String!
    updatedAt: String!
    email: String
  }
`;

module.exports = {
  typeDefs
};
