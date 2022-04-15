// Libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config"); // read data from .env

// Creating the app
const app = express();
app.use(cors());
app.use(bodyParser.json()); // we make sure body parser works

// Creating Middlewares (Routes)
const licensesRoute = require("./routes/licenses");
const availableKeysRoute = require("./routes/availablekeys");

// Applying Middlewares
app.use("/licenses", licensesRoute);
app.use("/availablekeys", availableKeysRoute);

app.get("/", (req, res) => {
	res.send("api running...");
});

// Connect to DB
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log("Conected to db!")
);

// Start listsening to the enpoint http://localhost:3000/
app.listen(process.env.PORT || 3000);
