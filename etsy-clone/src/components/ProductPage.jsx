import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart, increaseQuantity, decreaseQuantity } from "../redux/amazoneSlice";
import { motion } from "framer-motion";

const ProductPage = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const products = data.data;
  const product = products.find((product) => product.id == id);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.amazonReducer.products);
  const cartItem = cartProducts.find((item) => item.id == id);
  
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
    return <div className="text-center text-2xl mt-10">Product not found{id}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="bg-white p-6 border rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <img
              className="w-64 h-64 object-contain mx-auto"
              src={product.image}
              alt="Product"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col justify-center bg-white p-6 shadow-lg rounded-lg"
        >
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">₹{product.price}</p>
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="mr-4 text-lg font-medium">
              Quantity:
            </label>
            <button
              onClick={handleDecreaseQuantity}
              className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              value={quantity}
              readOnly
              className="w-20 p-2 mx-2 border rounded-lg text-center"
            />
            <button
              onClick={handleIncreaseQuantity}
              className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
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
