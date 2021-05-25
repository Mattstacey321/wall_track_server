import crypto from "crypto";
import envConfig from "../../config/env_config.js";

export default (value) => {
  return new Promise((resolve, reject) => {
    let salt = envConfig.salt;
    crypto.scrypt(value, salt, 12, (err, derivedKey) => {
      if (err) reject(err);
      resolve(salt + ":" + derivedKey.toString("hex"));
    });
  });
};
