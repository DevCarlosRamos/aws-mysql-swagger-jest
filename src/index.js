const serverless = require("serverless-http");
const app = require('./app');

handler = serverless(app);

module.exports = { handler, app };
