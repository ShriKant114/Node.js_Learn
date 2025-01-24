const express = require("express");
const con = require("./config");

const app = express();

app.get("/", (req, resp) => {
    // MySQL query
    con.query("SELECT * FROM data", (err, result) => {
        if (err) {
            // Error response
            resp.status(500).send({ error: "Database query failed", details: err });
        } else {
            // Success response
            resp.status(200).json(result); // Send query results as JSON
        }
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
