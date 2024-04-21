const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
    UserName:{
        type:String,
        required :true
    },
    Email:{
        type:String,
        required:true,
        unique: true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength :6
    },
    Cart:{
        type:[String]
    },
    Orders:{
        type:[String]
    }
});

const UserModel = mongoose.model("Users", UsersSchema);

module.exports = UserModel;
