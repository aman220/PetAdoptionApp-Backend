const CartModel = require("../Models/CartModel");
const Order = require("../Models/OrderMode");
const Product = require("../Models/ProductModel");
const UserModel = require("../Models/UserModel");
const { verityToken } = require("./JWTverify");



//for admin
exports.CreateProduct = async (req, res) => {
    try {
        const response = await Product.create(req.body);
        res.status(201).json({ response })
    } catch (error) {
        res.send(501).json({ message: error.message })
    }
}




//for user app
exports.GetAllProducts = async (req, res) => {
    const Token = req.headers.auttoken;
    if (!Token) {
        return res.status(501).json({ message: "Token Missing" })
    }
    try {
        verityToken(Token)
        const data = await Product.find({});
        res.status(201).json({ data });
    } catch (error) {
        res.status(501).json({ message: error.message });
    }
}

exports.getProductData = async (req, res) => {
    const Token = req.headers.auttoken;
    if (!Token) {
        return res.status(501).json({ message: "Token Missing" })
    }
    try {
        verityToken(Token)
        const data = await Product.findOne({ _id: req.body.id })
        res.status(201).json({ message: "sucess", data });
    } catch (error) {
        res.status(501).json({ message: error.message });
    }
}

exports.GetByCategory = async (req, res) => {
    const category = req.body.Category;
    try {
        const data = await Product.find({ Category: category })
        res.status(201).json({ data });
    } catch (error) {
        res.status(501).json({ messsage: error.message })
    }
}

exports.AddTocart = async (req, res) => {
    const Token = req.headers.auttoken;
    if (!Token) {
        return res.status(501).json({ message: "Token Missing" })
    }
    try {
        const decodedToken = verityToken(Token);
        const u_id = decodedToken.id;
        if (!u_id) {
            return res.status(501).json({ message: "Id Not Found In Token" })
        }
        const { user_id, pro_id, quantity } = req.body;
        await CartModel.create({
            u_id: u_id,
            p_id: pro_id,
            quantity: quantity,
        })
        await UserModel.findByIdAndUpdate(
            u_id,
            { $push: { Cart: res._id } },
            { new: true, useFindAndModify: false }
        )
        res.status(200).json({ message: "Sucess" });
    } catch (error) {
        res.status(501).json({ message: error.message });
    }
}

exports.getCartData = async (req, res) => {
    const Token = req.headers.auttoken;
    if (!Token) {
        return res.status(201).json({ message: "Token Missing" })
    }
    try {
        const decodedToken = verityToken(Token);
        const u_id = decodedToken.id;
        if (!u_id) {
            return res.status(201).json({ message: "Id Not Found In Token" })
        }
        const CartData = await CartModel.find({ u_id: u_id });
        return res.status(201).json({ data: CartData })
    } catch (error) {
        res.status(501).json({ message: error })
    }
}


exports.PlaceOrder = async (req, res) => {
    const Token = req.headers.auttoken;
    const { product_id, orderdate , totalAmount , paymentMethod , billingName , billingAddress , billingCountry , postalCode ,phoneNumber  } = req.body;
    if (!Token) {
        return res.status(201).json({ message: "Token Missing" })
    }
    try {
        const decodedToken = verityToken(Token);
        const u_id = decodedToken.id;
        if (!u_id) {
            return res.status(201).json({ message: "Id Not Found In Token" })
        }
        const response = await Order.create({
            u_id: u_id,
            product_id: product_id,
            orderdate: orderdate,
            totalAmount: totalAmount,
            paymentMethod: paymentMethod,
            billingName: billingName,
            billingAddress: billingAddress,
            billingCountry: billingCountry,
            postalCode: postalCode,
            phoneNumber: phoneNumber
        });

        return res.status(200).json({message:"Order Placed Success" , response}); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

exports.getAllOrdersbyID = async(req, res)=>{
    const Token = req.headers.auttoken;
    if (!Token) {
        return res.status(201).json({ message: "Token Missing" })
    }
    try {
        const decodedToken = verityToken(Token);
        const u_id = decodedToken.id;
        if (!u_id) {
            return res.status(201).json({ message: "Id Not Found In Token" })
        }
        const OrderData = await Order.find({ u_id: u_id });
        return res.status(201).json({ data: OrderData })
    } catch (error) {
        res.status(501).json({ message: error })
    }
}

exports.getAllOrder = async(req, res)=>{
    const Token = req.headers.auttoken;
    if (!Token) {
        return res.status(201).json({ message: "Token Missing" })
    }
    try {
        const response = await Order.find({});
        return res.status(201).json({ message:"Order Fetch Success" , data: response })
    } catch (error) {
        return res.status(501).json({ message: error.message })
    }
}