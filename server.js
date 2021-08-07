const express = require('express');
const env = require('dotenv');
env.config();
const app = express();
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});