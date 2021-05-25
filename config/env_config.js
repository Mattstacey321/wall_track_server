import dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "development",
  connection:
    process.env.NODE_ENV == "development"
      ? process.env.LOCAL_CONNECTION
      : process.env.MONGODB_CONNECTION,
  salt: process.env.HASH_PASSWORD,
};

export default config;
