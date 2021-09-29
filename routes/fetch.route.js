
const express = require("express");
const fetchRouter = express.Router();
const fs = require("fs");

const dir = "D:/filesystem";

fetchRouter.get("/", (req, res) => {

    // Fetching filenames from given directory
    fs.readdir(dir, (err, files) => {

        if (files.length) {
            res.send(files);
        }
        else {
            res.send(`No files found!
            Create new file using /create`);
        }
    });



});

module.exports.fetchRouter = fetchRouter;