const mongoose = require('mongoose');

const AppInstance = mongoose.Schema({

    port: Number,
    status: String
},
    {
        timestamps: true
    });


module.exports = mongoose.model('AppInstance', AppInstance);