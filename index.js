// Starting point of Server
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
// db uri
const uri =
    "mongodb+srv://behind8486:ehdgks016@cluster0.r2p8oxc.mongodb.net/?retryWrites=true&w=majority";

// mongoose connect
mongoose
    .connect(uri)
    .then(() => console.log("MongoDB connected.."))
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
