import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart, increaseQuantity, decreaseQuantity } from "../redux/amazoneSlice";
import { motion } from "framer-motion";

const ProductPage = () => {
  const { id } = useParams();
  const products = useLoaderData();
  const product = products?.find((product) => product.id == id);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.amazonReducer.products);
  const cartItem = cartProducts?.find((item) => item.id == id);

  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);

  const handleAddToCart = () => {
    if (cartItem) {
      dispatch(increaseQuantity(product.id));
    } else {
      dispatch(addToCart({ ...product, quantity }));
    }
  };

  const handleIncreaseQuantity = () => {
    if (cartItem) {
      dispatch(increaseQuantity(product.id));
    } else {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (cartItem && cartItem.quantity > 1) {
      dispatch(decreaseQuantity(product.id));
    } else if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  if (!product) {
    return <div className="text-center text-2xl mt-10 text-white">Product not found{id}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="bg-gray-800 p-6 border border-gray-700 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <img
              className="w-full h-full object-cover mx-auto"
              src={product.imageUrl}
              alt="Product"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col justify-center bg-gray-800 p-6 shadow-lg rounded-lg"
        >
          <h1 className="text-4xl font-bold mb-4 text-blue-400">{product.name}</h1>
          <p className="text-gray-400 text-lg mb-4">
            {product.description || "This is a great product from our latest collection. High quality and excellent value for money. Perfect for anyone looking for the best in the market."}
          </p>
          <p className="text-2xl font-semibold text-blue-500 mb-6">₹{product.price}</p>
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="mr-4 text-lg font-medium text-white">
              Quantity:
            </label>
            <button
              onClick={handleDecreaseQuantity}
              className="px-2 py-1 bg-gray-700 rounded-md hover:bg-gray-600"
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              value={quantity}
              readOnly
              className="w-20 p-2 mx-2 bg-gray-900 border border-gray-700 rounded-lg text-center text-white"
            />
            <button
              onClick={handleIncreaseQuantity}
              className="px-2 py-1 bg-gray-700 rounded-md hover:bg-gray-600"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Add to Cart
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
