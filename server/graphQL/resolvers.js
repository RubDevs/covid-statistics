const TABLE = "statistics";

module.exports = function (injectedStore) {
  let store = injectedStore;

  return {
    Statistics: async () => {
      const statistics = await store.list(TABLE);
      return statistics;
    },
  };
};
