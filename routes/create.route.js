
const express = require("express");
const createRouter = express.Router();

const fs = require("fs");

createRouter.get("/", (req, res) => {

    const today = new Date();

    const date = "(" + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ")";

    const time = "(" + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds() + ")";

    const dateTime = date + '-' + time;

    const timeStamp = Date.now();

    // Creating new .txt file
    fs.writeFile(`D:/filesystem/${dateTime}.txt`, `${timeStamp}`, (err) => {
        if (err) console.log(err);
    });
    res.send("File created successfully! use /fetch to get all the files.");

});

module.exports.createRouter = createRouter;