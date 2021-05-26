const { buildSchema } = require("graphql");
const { readFileSync } = require("fs");
const { join } = require("path");

const schema = buildSchema(
  readFileSync(join(__dirname, "schema.graphql"), "utf8")
);

module.exports = schema;
