//browser se data sidhe form me

const express = require('express');
const app = express();
const path = require('path');  


console.log(__dirname)  //ye directory k name de deti h

const publicPath = path.join(__dirname,'public')
app.use(express.static(publicPath))


app.get("/about" , (req, resp) => {
    resp.send(`
       <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome</title>
        </head>
        <body>
            <input type="text" placeholder="User name" />
        <button>Click me</button>
        <a href="/">Go to home</a>
        </body>
        </html>
    `);
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
    console.log("Visit: http://localhost:5000");
});
