const mysql = require("mysql");
const config = require("../config");

const dbconf = {
  host: `${config.mysql.host}:${config.mysql.port}`,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.db,
};

//connect
let connection;

function handleConnection() {
  connection = mysql.createConnection(dbconf);

  connection.connect((error) => {
    if (error) {
      console.error("[db error]", error);
      setTimeout(handleConnection, 2000);
    } else {
      console.log("DB connected");
    }
  });

  connection.on("error", (error) => {
    console.error("[DB error]", error);
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      handleConnection();
    } else {
      throw error;
    }
  });
}

handleConnection();
