module.exports = (app) => {
    const instance = require('../controllers/instance.controller.js');

    // Create a new Note
    app.post('/api/create-instance', instance.createInstance);

    // Retrieve all Notes
    app.get('/api/get-all-instance', instance.findAll);

    // // Retrieve a single Note with noteId
    // app.get('/supplier/:supplierId', supplier.findOne);

    // // Update a Note with noteId
    // app.put('/supplier/:supplierId', supplier.update);

    // // Update a Note with noteId
    // app.put('/deletesupplier/:supplierId', supplier.deletesupplier);

    // // Delete a Note with noteId
    // app.delete('/supplier/:supplierId', supplier.delete);
}