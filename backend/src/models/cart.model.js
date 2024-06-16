// import mongoose from 'mongoose';

// // Define the schema for cart items
// const cartItemSchema = new mongoose.Schema(
//     {
//         productId: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Product',
//             required: true
//         },
//         quantity: {
//             type: Number,
//             required: true,
//             min: 1
//         },
//         price: {
//             type: Number,
//             required: true,
//             min: 0
//         }
//     },
//     {
//         _id: false // Disable the automatic generation of _id for subdocuments
//     }
// );

// // Define the schema for the cart
// const cartSchema = new mongoose.Schema(
//     {
//         userId: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User',
//             required: true
//         },
//         items: [cartItemSchema],
//         totalPrice: {
//             type: Number,
//             required: true,
//             min: 0,
//             default: 0
//         }
//     },
//     {
//         versionKey: false,
//         timestamps: true
//     }
// );

// // Middleware to calculate totalPrice before saving
// cartSchema.pre('save', function (next) {
//     this.totalPrice = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     next();
// });

// const Cart = mongoose.model('Cart', cartSchema);

// export default Cart;















// Import the mongoose library to interact with MongoDB
import mongoose from 'mongoose';

// Define the schema for cart items
const cartItemSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product', // Reference to the Product model
            required: true // productId is required
        },
        quantity: {
            type: Number,
            required: true, // quantity is required
            min: 1 // Minimum quantity is 1
        },
        price: {
            type: Number,
            required: true, // price is required
            min: 0 // Minimum price is 0
        }
    },
    {
        _id: false // Disable the automatic generation of _id for subdocuments
    }
);

// Define the schema for the cart
const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
            required: true // userId is required
        },
        items: [cartItemSchema], // Array of cart items
        totalPrice: {
            type: Number,
            required: true, // totalPrice is required
            min: 0, // Minimum totalPrice is 0
            default: 0 // Default value for totalPrice is 0
        }
    },
    {
        versionKey: false, // Disable the __v version key
        timestamps: true // Add createdAt and updatedAt timestamps
    }
);

// Middleware to calculate totalPrice before saving the document
cartSchema.pre('save', function (next) {
    // Calculate the total price by summing the price * quantity for each item
    this.totalPrice = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    next(); // Call the next middleware or save function
});

// Create the Cart model from the cart schema
const Cart = mongoose.model('Cart', cartSchema);

// Export the Cart model for use in other parts of the application
export default Cart;












// // models/Cart.js
// import mongoose from 'mongoose';

// // Define the Cart schema
// const cartSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Product',
//     required: true,
//     unique: true,
//   },
//   quantity: {
//     type: Number,
//     default: 1,
//     min: [1, 'Quantity must be at least 1.'],
//   },
//   createdOn: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Create the Cart model
// const Cart = mongoose.model('Cart', cartSchema);

// export default Cart;
