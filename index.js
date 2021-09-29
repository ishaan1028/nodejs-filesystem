const { createRouter } = require("./routes/create.route");
const { fetchRouter } = require("./routes/fetch.route");

const express = require("express");
const fs = require("fs");
const path = require('path');



const app = express();
const port = 3001;
const dir = "D:/filesystem";

const dirnamePath = path.join(__dirname, '/picturesdirname');
const dirPath = path.join(dir, '/picturesdir');

// Middlewares
app.use("/create", createRouter);

app.use("/fetch", fetchRouter);

// Home route
app.get("/", (req, res) => {

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        fs.mkdirSync(dirnamePath);
        fs.mkdirSync(dirPath);

    }
    res.send("check directory filesystem created at D drive! use /create to create and /fetch to fetch files!");
});

app.listen(process.env.PORT || port);