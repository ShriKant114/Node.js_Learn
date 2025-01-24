//browser se data sidhe form me

const express = require('express');
const app = express();
const path = require('path');  


console.log(__dirname)  //ye current directory k name de deti h

const publicPath = path.join(__dirname,'public')

app.get('' , (req, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
})


app.listen(5000, () => {
    console.log("Server is running on port 5000");
    console.log("Visit: http://localhost:5000");
});
