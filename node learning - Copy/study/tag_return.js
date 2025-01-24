const express = require('express');
const app = express();

//add in the browser for responce 
//http://localhost:5000?name=YourName
app.get('',(req,res) =>{
    res.send('<h1 style="color: #e75480;">Hi, welcome</h1>')
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
    console.log("Visit: http://localhost:5000");
});
