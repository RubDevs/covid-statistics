const Statistics = require("../models/statistics");

module.exports = function (injectedStore) {
  let store = injectedStore;

  return {
    Statistics: async () => {
      const statistics = await store.list(Statistics);
      return statistics;
    },
  };
};
