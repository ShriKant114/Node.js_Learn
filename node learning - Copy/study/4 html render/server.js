//browser se data sidhe form me

const express = require('express');
const app = express();
const path = require('path');  
console.log(__dirname)  //ye directory k name de deti h

//add in the browser for responce 
//http://localhost:5000?name=YourName


app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome</title>
        </head>
        <body>
            <h1 style="color: #e75480;">Hi, welcome</h1>
            <button style="color: yellow; width: 50px; height: 20px;" onclick="window.open('/about');">Click</button>
        </body>
        </html>
    `);
});



//http://localhost:5000/about?name=sam

app.get("/about" , (req, resp) => {
    resp.send(`
        <input type="text" placeholder="User name" value="${req.query.name}" />
        <button>Click me</button>
        <a href="/">Go to home</a>
    `);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
    console.log("Visit: http://localhost:5000");
});
