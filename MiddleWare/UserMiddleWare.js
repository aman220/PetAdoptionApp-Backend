const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { verityToken } = require("./JWTverify");

exports.createUser = async (req, res) => {
    const { UserName, Email, password } = req.body;
    const existingUser = await UserModel.findOne({ Email: Email });
    if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
    }
    if (password.length < 6) {
        return res.status(409).json({ message: "password Shoud not less then 6" });
    }
    try {
        const newpassword = await bcrypt.hash(password, 10);
        await UserModel.create({
            UserName: UserName,
            Email: Email,
            password: newpassword
        });
        res.status(201).json({ message: "User Signup Sucess" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



exports.Login = async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const response = await UserModel.findOne({ Email: Email });
        if (response) {
            const pass = response.password;
            const check = await bcrypt.compare(Password, pass);
            if (check == true) {
                const token = jwt.sign({ id: response._id, UserName: response.UserName, Email: response.Email }, "amanthakur");
                return res.status(201).json({ message: "Success", jwtToken: token })
            } else {
                return res.status(401).json({ message: "Password Incorrect" })
            }
        } else {
            return res.status(501).json({ message: "User Not Exist" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};



exports.GetUserData = async (req, res) => {
    const Token = req.headers.auttoken;
    if (!Token) {
        return res.status(501).json({ message: "Token Missing" })
    }
    try {
        const decodedToken = verityToken(Token);
        const id = decodedToken.id;
        if (!id) {
            return res.status(501).json({ message: "Id Not Found In Token" })
        }
        const data = await UserModel.findOne({ _id: id })
        res.status(201).json({ data });
    } catch (error) {
        res.status(501).json({ message: error.message })
    }
}





//admin middlewares

exports.Adminlogin = async (req, res) => {
    const { UserName, Password } = req.body;
    if (UserName == 'Admin' && Password == "admin123") {
        return res.status(201).json({ message: "Sucess" })
    } else {
        return res.status(501).json({ message: "Wrong Credintials" });
    }
}
