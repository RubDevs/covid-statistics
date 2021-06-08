const userMock = require("../mocks/userMock");

async function list(model) {
  try {
    const lastDate = await model.max("CreationDate");
    const data = await model.findAll({
      where: {
        CreationDate: lastDate,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}

async function save(model, data) {
  let users = [];
  const user = {
    Id: "someId",
    ...data,
  };
  users.push(user);
  return users[0];
}

async function get(model, field, data) {
  const user = userMock.find((u) => u.email === data);
  return user ? user : false;
}

async function ratios() {}

module.exports = {
  list,
  save,
  get,
  ratios,
};
