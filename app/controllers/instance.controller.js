const AppInstance = require('../models/instance.model.js');

// Create and Save a new Item
exports.createInstance = (req, res) => {

    // Create an Item
    const instance = new AppInstance({
        port: req.body.port,
        status: req.body.status,
    });

    // Save instance in the database
    instance.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the supplier."
            });
        });

};








// // Retrieve and return all instance from the database.
exports.findAll = (req, res) => {
    AppInstance.find({ status: { $ne: '0' } })

        .then(instance => {
            res.send(instance);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving instance."
            });
        });
};