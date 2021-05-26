const resolvers = require("./resolvers");
const config = require("../config");

let store;

//choose DB according to environment
if (config.dev) {
  //Dummy when devvelopment
  store = require("../store/dummy");
} else {
  //mysql when production
  store = require("../store/mysql");
}

//Dependency Injection
module.exports = resolvers(store);
