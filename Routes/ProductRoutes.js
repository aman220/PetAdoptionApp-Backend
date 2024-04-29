const express = require("express");
const {  createUser, Login, Adminlogin, GetUserData } = require("../MiddleWare/UserMiddleWare");
const { CreateProduct, GetAllProducts, GetByCategory, getProductData, AddTocart, getCartData, PlaceOrder, getAllOrdersbyID, getAllOrder } = require("../MiddleWare/ProductMiddleWare");
const Productroutes = express.Router();

Productroutes.post("/createproduct", CreateProduct);
Productroutes.get("/getallProducts" , GetAllProducts);
Productroutes.get("/byCategory" ,GetByCategory);
Productroutes.post("/getproductdata" , getProductData);
Productroutes.post("/addtocart" ,AddTocart);
Productroutes.post("/getCart" ,getCartData);
Productroutes.post("/Placeorder" , PlaceOrder);
Productroutes.get("/getOrdersbyid" , getAllOrdersbyID);
Productroutes.get("/getOrders" , getAllOrder);


module.exports = Productroutes;

