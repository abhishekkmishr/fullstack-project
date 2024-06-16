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
















// models/Cart.js
import mongoose from 'mongoose';

// Define the schema for cart items
const cartItemSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        price: {
            type: Number,
            required: true,
            min: 0
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
            ref: 'User',
            required: true
        },
        items: [cartItemSchema],
        totalPrice: {
            type: Number,
            required: true,
            min: 0,
            default: 0
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

// Middleware to calculate totalPrice before saving
cartSchema.pre('save', function (next) {
    this.totalPrice = this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    next();
});

const Cart = mongoose.model('Cart', cartSchema);

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
