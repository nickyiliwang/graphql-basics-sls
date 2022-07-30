const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    # now we are using enum to validate
    nationality: Nationality!
    friends: [User]
  }

  type Query {
    users: [User!]!
  }

  # validation of input with enum
  enum Nationality {
    CANADA
    BRAZIL
    CHILE
    INDIA
    GERMANY
  }
`;

module.exports = { typeDefs };
