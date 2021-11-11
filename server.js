require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP
const express = require("express");
const app = express();

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
// });

// Middleware
app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/restaurant", require("./routes/restaurantRoutes"));

// Global Error Handler. IMPORTANT function params MUST start with err
// app.use((err, req, res, next) => {
//   console.log(err.stack);
//   console.log(err.name);
//   console.log(err.code);

//   res.status(500).json({
//     message: "Something went rely wrong",
//   });
// });

// const restaurantRoute = require('./routes/restaurantRoutes');

// app.use('/api/restaurant', restaurantRoute);



// Listen on pc port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

// module.exports = pool;

