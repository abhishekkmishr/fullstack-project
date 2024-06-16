import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  deleteItem,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/amazoneSlice";
import { motion } from "framer-motion";
import { emptyCart } from "../assets";
import { Link } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.amazonReducer.products);
  const dispatch = useDispatch();
  
  const [totalAmt, setTotalAmt] = useState("");
  
  // Calculate total amount when products change
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [products]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {products.length > 0 ? (
        // Render cart items if there are products in the cart
        <div className="container mx-auto grid grid-cols-1 xl:grid-cols-5 gap-8">
          {/* Cart items */}
          <div className="col-span-4 bg-white p-6 shadow-lg rounded-lg">
            <div className="flex justify-between items-center border-b pb-4">
              <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
              <h3 className="text-xl font-semibold text-gray-800">Subtotal</h3>
            </div>
            <div>
              {/* Display each product in the cart */}
              {products.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center justify-between border-b py-4"
                >
                  {/* Product details */}
                  <div className="md:flex items-center gap-4">
                    <img
                      className="w-40 h-40 object-contain rounded-lg"
                      src={item.image}
                      alt="productImg"
                    />
                    <div className="flex flex-col gap-2 mt-4 md:mt-0">
                      <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                      <p className="text-gray-600">{item.description}</p>
                      <p className="text-base text-gray-800">
                        Unit Price: <span className="font-semibold">${item.price}</span>
                      </p>
                      {/* Quantity control */}
                      <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
                        <p className="text-base">Qty:</p>
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="text-amazon_blue font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                      {/* Delete item button */}
                      <button
                        onClick={() => dispatch(deleteItem(item.id))}
                        className="mt-2 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Delete Item
                      </button>
                    </div>
                  </div>
                  {/* Total price for each product */}
                  <div className="mt-4 md:mt-0 text-lg font-semibold text-gray-800">
                    ${item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>
            {/* Clear cart button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => dispatch(resetCart())}
                className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Clear Cart
              </button>
            </div>
          </div>
          {/* Summary section */}
          <div className="col-span-1 bg-white p-6 shadow-lg rounded-lg">
            <p className="flex items-start text-sm text-gray-600 mb-4">
              <CheckCircleIcon className="text-green-500 mr-2" />
              Your order qualifies for FREE Shipping. Choose this option at checkout.
              See details....
            </p>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-800 font-semibold">Total:</p>
              <p className="text-lg font-bold text-gray-800">${totalAmt}</p>
            </div>
            {/* Proceed to buy button */}
            <button className="w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
              Proceed to Buy
            </button>
          </div>
        </div>
      ) : (
        // Render empty cart message if there are no products in the cart
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-center py-10"
        >
          <img
            className="w-80 mb-4"
            src={emptyCart}
            alt="emptyCart"
          />
          <div className="bg-white p-6 rounded-md shadow-lg text-center">
            <h1 className="text-xl font-bold mb-2">Your Cart feels lonely.</h1>
            <p className="text-sm text-gray-600 mb-6">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            {/* Continue shopping button */}
            <Link to="/">
              <button className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
