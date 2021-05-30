module.exports = {
  dev: process.env.NODE_ENV != "production",
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  mysql: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    db: process.env.MYSQL_DATABASE,
  },
};
