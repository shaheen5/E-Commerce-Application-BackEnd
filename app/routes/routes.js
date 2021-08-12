const controller = require('../controllers/users');
const helper = require('../middlewares/helper');

module.exports = (app)=>{
    app.post('/users-signup',helper.setRole('user'),controller.userSignup);

    app.post('/admin-signup',helper.setRole('admin'),controller.userSignup);

//     app.post('/admin-signin',helper.checkRole('admin'),controller.signin);

//     app.post('/users-signin',helper.checkRole('user'),controller.signin);
// 
}