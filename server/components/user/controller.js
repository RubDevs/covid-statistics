const User = require("../../models/user");

//Dependency injection
module.exports = function (injectedStore) {
  let store = injectedStore;

  async function save(data) {
    return await store.save(User, data);
  }

  //Exposed functions
  return {
    save,
  };
};
