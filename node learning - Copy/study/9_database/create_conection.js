const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'my_data'
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Database connected successfully");
    }
});
  
//data fech karne ke liye

connection.query("Select * from data",(err,result)=>{
    console.warn("result",result)
});