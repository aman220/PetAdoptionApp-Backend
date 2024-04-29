const express = require("express");
const {  createUser, Login, Adminlogin, GetUserData } = require("../MiddleWare/UserMiddleWare");
const Userroutes = express.Router();

Userroutes.post("/signup", createUser );
Userroutes.post("/login",Login);
Userroutes.post('/adminlogin' ,Adminlogin);
Userroutes.get('/getuser',GetUserData)


module.exports = Userroutes;

