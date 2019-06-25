import express from "express";

// Middleware de express.
import graphqlHTTP from "express-graphql";

const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "Hello world!"
  });
});

const schema = {};

// GraphiQL tool with which you can see the GraphQL interface in this route.
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema
  })
);

app.listen(3000, () => console.log("Server on port 3000"));
