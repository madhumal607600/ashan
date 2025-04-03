const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "oOUEELAY#ZxQytBsmGeF1zEY7NFirrVl6qvH4qnWpRzq_v30e2to",
  MONGODB: process.env.MONGODB || "mongodb://mongo:emRInwNvlmXnnbSUwHOlxlcVyBtTpbmK@metro.proxy.rlwy.net:37521",
  OWNER_NUM: process.env.OWNER_NUM || "94743426307",
};
