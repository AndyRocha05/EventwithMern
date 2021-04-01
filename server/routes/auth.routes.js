const Event = require('../controllers/event')
const LogRegController = require('../controllers/auth.controller'),
    UserController = require('../controllers/user.controller'),
    {authenticate} = require('../config/jwt.config');

    
module.exports = (app) => {
    app.post('/api/register',LogRegController.register)
    app.post('/api/login',LogRegController.login)
    app.post('/api/event/create', Event.create)
    app.get('/api/event/get', Event.getAllEvent)
    app.get('/api/event/getUsers', Event.getAllUsers)
    app.get('/api/users',authenticate,UserController.index)
    app.get('/api/logout',authenticate,LogRegController.logout)
}