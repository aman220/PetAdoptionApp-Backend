const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Aman:12345@cluster0.yydgnuu.mongodb.net/pet_Adoption").then(() => {
    console.log("Db  connect")
}).catch((error) => {
    console.log(error);
})