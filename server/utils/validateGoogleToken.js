const { OAuth2Client } = require("google-auth-library");
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const client = new OAuth2Client(clientId);

module.exports = async function (token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: clientId,
    });

    const payload = ticket.getPayload();
    const userid = payload["sub"];
    if (userid) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
