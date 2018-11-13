const User = require('../models/user.model.js');
const atob = require('atob');

// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    if (!req.body.email) {
        return res.status(400).send({
            message: "Email can not be empty"
        });
    }
    var password = atob(req.body.password);
    // Create a user
    const user = new User({
        email: req.body.email,
        password: password,
        userType: req.body.userType,
        status: req.body.status,
        port: req.body.port,
        basePath: req.body.basePath
    });

    // Save user in the database
    user.save()
        .then((data) => {
            res.send(data);

        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
};


// Retrieve and return all users from the database.
exports.findAll = (req, res) => {


    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};


// Find a user
exports.login = (req, res) => {

    var query = { $and: [{ email: req.body.email, }, { password: req.body.password }] }

    User.find(query)
        .then(user => {
            var userSuccess = [{
                email: user[0].email,
                id: user[0]._id,
                userType: user[0].userType,
                status: user[0].status,
                port: user[0].port,
                basePath: user[0].basePath
            }]
            return res.status(200).send({
                message: "Success",
                status: userSuccess
            });
        }).catch(err => {

            return res.status(200).send({
                message: "Error login"
            });
        });
};