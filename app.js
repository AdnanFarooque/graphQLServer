const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/schema.js");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect("mongodb+srv://dipta:1234@gql-ninja.is0el.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
mongoose.connection.once("open", () => {
    console.log("connected to database");
});

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(8080, () => {
    console.log("now listening for requests on port 8080");
});