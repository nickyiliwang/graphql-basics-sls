"use strict";

const { ApolloServer } = require("apollo-server-lambda");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({
  typeDefs, // define types, like type User
  resolvers, // functions that handles data transactions

  csrfPrevention: true,
  cache: "bounded",
});

exports.graphqlHandler = server.createHandler();
