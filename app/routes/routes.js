const controller = require('../controllers/users');

module.exports = (app)=>{
    app.post('/signin',controller.signin);

    app.post('/signup',controller.signup);
}