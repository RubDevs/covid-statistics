const config = require("../../config");
let User;
if (!config.dev) {
  User = require("../../models/user");
}

const field = "email";

//Dependency injection
module.exports = function (injectedStore) {
  let store = injectedStore;

  async function save(data) {
    return await store.save(User, data);
  }

  async function getUser(email) {
    return await store.get(User, field, email);
  }

  //Exposed functions
  return {
    save,
    getUser,
  };
};
