const mysql = require("mysql2");

// MySQL Database Configuration
const con = mysql.createConnection({
    host: "localhost",    // डेटाबेस का होस्ट
    user: "root",         // MySQL यूज़रनेम
    password: "1234",     // MySQL पासवर्ड
    database: "my_data"   // डेटाबेस का नाम
});

// कनेक्शन को चेक करना
con.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        console.log("Connected to the database!");
    }
});

module.exports = con; // इसे एक्सपोर्ट करें ताकि अन्य फाइल्स में उपयोग कर सकें
