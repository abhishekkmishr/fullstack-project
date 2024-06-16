// import express from 'express';
// import { addToCart } from '../controllers/cartController.js';

// const router = express.Router();

// router.post('/add', async (req, res) => {
//     const { userId, productId, quantity, price } = req.body;
//     try {
//         const updatedCart = await addToCart(userId, productId, quantity, price);
//         res.status(200).json(updatedCart);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// export default router;






// src/routes/cart.routes.js
import express from 'express';
import middleware from "../middleware/user.middleware.js"

import {
  AddToCart,
  ClearCartController,
  DeleteCartItem,
  GetAllCartItems,
  UpdateCartItem,
} from '../controllers/cartController.js'; // Import the cart controller functions

const cartRouter = express.Router(); // Create a new router instance for cart routes
cartRouter.use(middleware)
// Define the routes for cart operations
cartRouter
  .route('/')
  .get(GetAllCartItems) // Handle GET requests to retrieve all cart items
  .post(AddToCart) // Handle POST requests to add an item to the cart
  .patch(UpdateCartItem) // Handle PATCH requests to update an existing cart item
  .delete(DeleteCartItem); // Handle DELETE requests to remove an item from the cart

cartRouter.delete('/all', ClearCartController); // Handle DELETE request to clear the user cart

export default cartRouter; // Export the router instance for use in other parts of the application



