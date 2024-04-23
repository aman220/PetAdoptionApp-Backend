
// Import necessary models and dependencies
const CartModel = require("../Models/CartModel");
const OrderModel = require("../Models/OrderModel");
const { verityToken } = require("./JWTverify");

// Controller method to handle checkout process
exports.checkout = async (req, res) => {
    const token = req.headers.auttoken;
    if (!token) {
        return res.status(400).json({ message: "Token Missing" });
    }
    try {
        const decodedToken = verityToken(token);
        const userId = decodedToken.id;
        if (!userId) {
            return res.status(400).json({ message: "User ID Not Found In Token" });
        }

        // Retrieve cart items for the user
        const cartItems = await CartModel.find({ u_id: userId }).populate('p_id');
        if (!cartItems || cartItems.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        // Calculate total amount from cart items
        let totalAmount = 0;
        cartItems.forEach(item => {
            totalAmount += item.quantity * item.p_id.price;
        });

        // Create an order for the user with cart items
        const order = await OrderModel.create({
            user: userId,
            items: cartItems.map(item => ({
                product: item.p_id,
                quantity: item.quantity
            })),
            totalAmount
        });

        // Clear the user's cart after checkout
        await CartModel.deleteMany({ u_id: userId });

        // Return success response with the newly created order
        res.status(200).json({ message: "Checkout successful", order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { checkout };
