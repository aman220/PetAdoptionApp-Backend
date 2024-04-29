const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    ProductName: {
        type: String,
        required: true,
        trim: true
    },
    Description: {
        type: String,
        required: true,
        trim: true
    },
    Category: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Rating: {
        type: Number,
        default: 0.0
    },
    ImagesArray: {
        type: [String]
    },
    SizeArray: {
        type: [String]
    },
    OtherInformation:{
        type:[String]
    }
});

const Product = mongoose.model("Product", ProductSchema); 

module.exports = Product;
