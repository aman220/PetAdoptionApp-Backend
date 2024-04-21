const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    u_id:{
        type:String,
        required :true
    },
    p_id:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        require:true,
        default:1
    }
});

const CartModel = mongoose.model("Cart", CartSchema);

module.exports = CartModel;
