const CartModel = require("../Models/CartModel");
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
        res.status(201).json({ data });
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
            u_id: user_id,
            p_id: pro_id,
            quantity: quantity,
        })
        await UserModel.findByIdAndUpdate(
            user_id,
            { $push: { Cart: res._id } },
            { new: true, useFindAndModify: false }
        ) 
        res.status(200).json({message:"Sucess"});
    } catch (error) {
        res.status(501).json({ message: error.message });
    }
}