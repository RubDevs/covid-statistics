require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const path = require("path");

const schema = require("./graphQL/schema");
const resolvers = require("./graphQL/");
const apiUsers = require("./components/user/network");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(
  "/graphql",
  graphqlHTTP({ schema, rootValue: resolvers, graphiql: true })
);
apiUsers(app);

app.listen(process.env.PORT || 3000, () => {
  console.log("app listening");
});
