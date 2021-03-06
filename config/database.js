const mongoose = require('mongoose');
const env = require('dotenv');
env.config();
module.exports = () => {
    mongoose.connect(process.env.URL,
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex:true
        }).then(() => {
            console.log("Successfully connected to the database");
        }).catch(err => {
            console.log('Could not connect to the database. Exiting now...', err);
            process.exit();
        });
    
        return mongoose.connection;
}

