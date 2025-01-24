const express = require("express");
const con = require("./config");
const app = express();

// Middleware for JSON body parsing
app.use(express.json());

// 1. GET Endpoint (Retrieve All Data)
app.get("/", (req, resp) => {
    con.query("SELECT * FROM data", (err, result) => {
        if (err) {
            resp.status(500).send({ error: "Database query failed", details: err });
        } else {
            resp.status(200).json(result);
        }
    });
});

// 2. POST Endpoint (Insert New Data)
app.post("/", (req, resp) => {
    const data = req.body; // Get data from request body
    if (!data.name || !data.age) {
        return resp.status(400).send({ error: "Name and Age are required fields." });
    }

    con.query("INSERT INTO data SET ?", data, (error, result) => {
        if (error) {
            resp.status(500).send({ error: "Failed to insert data", details: error });
        } else {
            resp.status(201).send({ message: "Data inserted successfully", result });
        }
    });
});

// 3. PUT Endpoint (Update Data by SNO)
app.put("/:id", (req, resp) => {
    const recordId = req.params.id;
    const { name, age } = req.body;

    if (!name || !age) {
        return resp.status(400).send({ error: "Name and Age are required fields." });
    }

    con.query(
        "UPDATE data SET Name = ?, Age = ? WHERE SNO = ?",
        [name, age, recordId],
        (err, result) => {
            if (err) {
                return resp.status(500).send({
                    error: "Failed to update data",
                    details: err,
                });
            }

            if (result.affectedRows === 0) {
                return resp.status(404).send({ message: "Record not found" });
            }

            resp.status(200).send({
                message: "Data updated successfully",
                result,
            });
        }
    );
});

// 4. DELETE Endpoint (Delete Data by SNO)
app.delete("/:id", (req, resp) => {
    const recordId = req.params.id;

    con.query("DELETE FROM data WHERE SNO = ?", [recordId], (err, results) => {
        if (err) {
            return resp.status(500).send({
                error: "Failed to delete record",
                details: err,
            });
        }

        if (results.affectedRows === 0) {
            return resp.status(404).send({ message: "Record not found" });
        }

        resp.status(200).send({ message: "Record deleted successfully", results });
    });
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
