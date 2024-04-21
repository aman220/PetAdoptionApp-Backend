const express = require("express");
const {  createUser, Login, Adminlogin, GetUserData } = require("../MiddleWare/UserMiddleWare");
const { CreateProduct, GetAllProducts, GetByCategory, getProductData, AddTocart } = require("../MiddleWare/ProductMiddleWare");
const Productroutes = express.Router();

Productroutes.post("/createproduct", CreateProduct);
Productroutes.get("/getallProducts" , GetAllProducts);
Productroutes.get("/byCategory" ,GetByCategory);
Productroutes.get("/getproductdata" , getProductData);
Productroutes.post("/addtocart" ,AddTocart);


module.exports = Productroutes;

