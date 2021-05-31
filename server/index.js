require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const boom = require("@hapi/boom");
const path = require("path");

const schema = require("./graphQL/schema");
const resolvers = require("./graphQL/");
const apiUsers = require("./components/user/network");
const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require("./middleware/errorHandlers");
const isRequestAjaxOrApi = require("./utils/isRequestAjaxOrApi");
const auth = require("./middleware/auth");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(
  "/graphql",
  auth,
  graphqlHTTP({ schema, rootValue: resolvers, graphiql: true })
);
apiUsers(app);

//errors handler
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

//Not found
app.use(function (req, res, next) {
  if (isRequestAjaxOrApi(req)) {
    const {
      output: { statusCode, payload },
    } = boom.notFound();

    res.status(statusCode).json(payload);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("app listening");
});
