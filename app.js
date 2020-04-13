const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");   // To hide const values


// .use() function is Middlewares -> function that call if we go in specific url
app.use(cors());
app.use(bodyParser.json())  // every time we hit any request, we make sure body parser works

// Import Routes
const licensesRoute = require("./routes/licenses");
const availableKeysRoute = require("./routes/availablekeys");

app.use("/licenses", licensesRoute);
app.use("/availablekeys", availableKeysRoute);

app.get("/", (req, res) => {
    res.send("we are at home");
});


// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log("Conected to db!")
);

// Start listsening to the server
app.listen(3000);
