// this is where we help get the data defined in type-defs
// ie. api calls to get your data from db
const { UserList } = require("../fakedata");

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
  },
};

module.exports = { resolvers };
