const express = require('express');
const app = express();

//add in the browser for responce 
//http://localhost:5000?name=YourName

app.get("", (req, resp) => {
    console.log("Data sent by browser =>>>", req.query.name);
    resp.send("Welcome, " + req.query.name);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
