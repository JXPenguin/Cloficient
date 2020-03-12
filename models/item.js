const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    type: String,
    name: String,
    brand: String,
    color: String,
    price: String,
    wears: String,
    date: String,
    favorite: Boolean
});

module.exports = mongoose.model("Item", itemSchema);