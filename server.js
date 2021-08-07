const express = require('express');
const env = require('dotenv');

env.config();
const app = express();

// Configuring the database
const dbConnect = require('./config/database');
dbConnect();

app.get('/', (req, res) => {
  res.json({ message: "E-Commerce Application Backend"})
});
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});