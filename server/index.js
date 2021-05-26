require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const path = require("path");

const schema = require("./graphQL/schema");
const resolvers = require("./graphQL/");

const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(
  "/graphql",
  graphqlHTTP({ schema, rootValue: resolvers, graphiql: true })
);

app.listen(process.env.PORT || 3000, () => {
  console.log("app listening");
});
