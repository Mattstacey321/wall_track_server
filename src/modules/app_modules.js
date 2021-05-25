import MainResolver from "./main/main_resolvers.js";
import MainTypeDefs from "./main/main_schema.js";

const typeDefs = [MainTypeDefs];

const resolvers = [MainResolver];

export { typeDefs, resolvers };
