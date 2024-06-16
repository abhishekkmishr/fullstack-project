// import Cart from '../models/cart.model.js';

// export const addToCart = async (userId, productId, quantity, price) => {
//     try {
//         let cart = await Cart.findOne({ userId: userId });

//         if (!cart) {
//             cart = new Cart({ userId: userId, items: [] });
//         }

//         const existingItemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

//         if (existingItemIndex >= 0) {
//             cart.items[existingItemIndex].quantity += quantity;
//             cart.items[existingItemIndex].price = price; 
//         } else {
//             cart.items.push({ productId: productId, quantity: quantity, price: price });
//         }

//         await cart.save();
//         return cart;
//     } catch (error) {
//         throw new Error('Error updating cart: ' + error.message);
//     }
// };










// controllers/cartController.js
import Cart from '../models/cart.model.js';

export const addToCart = async (req, res) => {
    const { userId, productId, quantity, price } = req.body;

    try {
        let cart = await Cart.findOne({ userId: userId });

        if (!cart) {
            cart = new Cart({ userId: userId, items: [] });
        }

        const existingItemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

        if (existingItemIndex >= 0) {
            cart.items[existingItemIndex].quantity += quantity;
            cart.items[existingItemIndex].price = price;
        } else {
            cart.items.push({ productId: productId, quantity: quantity, price: price });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Error updating cart: ' + error.message });
    }
};

