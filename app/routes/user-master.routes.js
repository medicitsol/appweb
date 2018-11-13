module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new Note
    app.post('/api/user-create', users.create);

    // Retrieve all users
    app.get('/user', users.findAll, (req, res) =>{

    });

    // Retrieve a single Note with noteId
    app.post('/user/login', users.login);

}