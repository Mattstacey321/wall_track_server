import config from "./env_config.js";
import mongoose from "mongoose";
export default () => {
  mongoose.Promise = global.Promise;
  mongoose.set("useFindAndModify", false);
  mongoose.set("debug", true);
  mongoose.connect(
    config.connection,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
    (res, err) => {
      config.env == "development"
        ? console.log("Connected to local MongoDB")
        : console.log("Connected to MongoDB");
    }
  );
};
