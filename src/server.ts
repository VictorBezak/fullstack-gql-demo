import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./api"

const app = express();

app.use("/graphql", graphqlHTTP({
   schema: schema,
   graphiql: true,
}));

app.get("/", (req, res) => {
   res.send("static HTML content")
});

app.listen(3000, () => {
   console.log("server is alive")
});
