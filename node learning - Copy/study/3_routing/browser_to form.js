//browser se data sidhe form me

const express = require('express');
const app = express();

//add in the browser for responce 
//http://localhost:5000?name=YourName
app.get('',(req,res) =>{
    res.send('<h1 style="color: #e75480;">Hi, welcome</h1>')
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
