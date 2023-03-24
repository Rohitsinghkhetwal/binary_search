const mongoos = require('mongoose');

const ProductSchemas = mongoos.Schema({
    name: String,
    brand: String,
    price: Number,
    catagory: String
});

module.exports = mongoos.model('product', ProductSchemas);


 