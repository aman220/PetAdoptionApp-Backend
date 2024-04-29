require('dotenv').config()
const express = require("express");
//now express server is running
const app = express();
require("./DB/conn.js")
const cors =  require("cors");
app.use(cors());


//useed to parse body from middleware function 
const bodyparser =  require("body-parser");
const Userroutes = require('./Routes/UserRoutes');
const Productroutes = require('./Routes/ProductRoutes.js');

//encode the body while parsing
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use(Userroutes);
app.use(Productroutes);

app.listen(process.env.PORT,()=>{
    console.log(`server running on ${process.env.PORT}`)
})