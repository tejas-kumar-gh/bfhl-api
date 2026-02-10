require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  EMAIL: process.env.OFFICIAL_EMAIL,
  GEMINI_KEY: process.env.GEMINI_API_KEY
};
