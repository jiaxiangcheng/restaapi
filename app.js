const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv/config");   // read data from .env

// 每一次我们接受到一个reques 都会从这个点运行所有以下的function

app.use(cors());
app.use(bodyParser.json())  // we make sure body parser works

// Import Routes
const licensesRoute = require("./routes/licenses");
const availableKeysRoute = require("./routes/availablekeys");
app.use("/licenses", licensesRoute);
app.use("/availablekeys", availableKeysRoute);

app.get("/", (req, res) => {
    res.send("we are at home");
});
 
/*
const License = require("./models/License");
app.get("/licenses", async (req, res) => {
    console.log("asdasdasdsad");
    try {
        const licenses = await License.find();
        console.log(licenses);
        res.json(licenses);
    } catch (error) {
        res.json({message: error});
    }
});*/

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log("Conected to db!")
);

// Start listsening to the server
app.listen(process.env.PORT || 3000);
