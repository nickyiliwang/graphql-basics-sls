"use strict";

const { ApolloServer } = require("apollo-server-lambda");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

exports.graphqlHandler = function (event, context, callback) {
  console.log("Async graphql handler")
  createHandler().then((handler) => handler(event, context, callback));
};

const createHandler = async () => {
  // const db = await getDb();
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    //  context: { db },
  });
  return server.createHandler();
};
