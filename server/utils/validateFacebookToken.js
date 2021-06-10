const https = require("https");

module.exports = function (token) {
  https.get(
    `https://graph.facebook.com/debug_token?input_token=${token}`,
    (res) => {
      if (res.statusCode === 200) {
        return true;
      }
      return false;
    }
  );
};
