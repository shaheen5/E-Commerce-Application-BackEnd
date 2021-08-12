const express = require('express');
const env = require('dotenv');
var bodyParser = require('body-parser')

env.config();
const app = express();


//parse requests of content-type application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}))

// parse requests of content-type - application/json
app.use(express.json());

require('./app/routes/routes')(app);

// Configuring the database
const dbConnect = require('./config/database');
dbConnect();

app.get('/', (req, res) => {
  res.json({ message: "Welcome to E-Commerce Application Backend"})
});
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});