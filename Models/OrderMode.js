const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    u_id: {
        type: String,
        required: true,
    },
    product_id:{
        type:String ,
        required:true,
    },
    orderdate: {
        type: Date,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    billingName: {
        type: String,
        required: true
    },
    billingAddress: {
        type: String,
        required: true,
    },
    billingCountry: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    OrderStatus:{
        type:String,
        default:"Order Placed"
    }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
