const jwt = require("jsonwebtoken");


//ye function token ko as a perameter lega or verify karke return kr dega
exports.verityToken = (Token)=>{
    
    return jwt.verify(Token ,process.env.KEY);
}