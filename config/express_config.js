import { bodyParserGraphQL } from "body-parser-graphql";
import express from "express";
import { graphqlUploadExpress } from "graphql-upload";

const app = express();
app.use(bodyParserGraphQL());
app.use(graphqlUploadExpress());

export default app;
