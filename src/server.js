import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import config from "../config/env_config.js";
import Connection from "../config/db_connection.js";
import app from "../config/express_config.js";
import { resolvers, typeDefs } from "./modules/app_modules.js";
const GRAPHQL_PORT = config.port;

const server = new ApolloServer({
  uploads: false,
  playground: false,
  typeDefs: typeDefs,
  resolvers: resolvers,
  introspection: true,
  context: async ({ req, _, __ }) => {
    //const token = req.headers.token;
    //const payload = verify(token, config.secret);
    return {
      // userId: payload.user.userId,
      // role: payload.role,
    };
  },
});

server.applyMiddleware({ app, path: "/graphql" });

const httpServer = createServer(app);

httpServer.listen(GRAPHQL_PORT, () => {
  Connection();
  console.log(`🚀 Server ready at http://localhost:${GRAPHQL_PORT}/graphql`);
});
