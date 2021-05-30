const config = require("../../config");
const controller = require("./controller");

//Dependency injection
let store;

if (config.dev) {
  store = require("../../store/dummy");
} else {
  store = require("../../store/mysql");
}

module.exports = controller(store);
