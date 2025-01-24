const mysql = require("mysql2");

// MySQL Database Configuration
const con = mysql.createConnection({
    host: "localhost",    // Database Host
    user: "root",         // MySQL Username
    password: "1234",     // MySQL Password
    database: "my_data"   // Database Name
});

// Check database connection
con.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database!");
    }
});

module.exports = con; // Export the connection
