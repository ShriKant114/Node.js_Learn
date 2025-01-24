//for data insertion

const express = require("express");
const con = require("./config");

const app = express();

// GET Endpoint
app.get("/", (req, resp) => {
    // MySQL query
    con.query("SELECT * FROM data", (err, result) => {
        if (err) {
            resp.status(500).send({ error: "Database query failed", details: err });
        } else {
            resp.status(200).json(result);
        }
    });
});

// POST Endpoint
app.post("/", (req, resp) => {
    // Hardcoded data to insert
    const data = {
        name: "Sanya",
        age: 21
    };

    // SQL query to insert data
    con.query("INSERT INTO data SET ?", data, (error, result) => {
        if (error) {
            resp.status(500).send({ error: "Failed to insert data", details: error });
        } else {
            resp.status(201).send({ message: "Data inserted successfully", result });
        }
    });
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});


//jab post karunga tab add hoga