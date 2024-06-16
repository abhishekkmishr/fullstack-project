

import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazoneSlice";

import womensClothingImage from '../../assets/images/womensClothingImage.jpeg';
import mensClothingImage from '../../assets/images/mensClothingImage.jpeg';
import electronicsImage from '../../assets/images/electronicsImage.jpeg';
import jewelryImage from '../../assets/images/jewelryImage.jpeg';
import allImage from '../../assets/images/allImage.jpeg';

const Products = () => {
  // Fetching data using useLoaderData hook
  const data = useLoaderData();
  const productsData = data.data;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to keep track of the selected category and price range
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  // Function to filter products based on the selected category
  const filterProducts = (category) => {
    setCategory(category);
  };

  // Filtered products based on the selected category and price range
  const filteredProducts = productsData.filter((item) => {
    const meetsCategory = category === "all" || item.category.toLowerCase() === category;
    const meetsPrice = item.price >= minPrice && item.price <= maxPrice;
    return meetsCategory && meetsPrice;
  });

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 my-4">
        <button
          onClick={() => filterProducts("all")}
          className={`py-2 px-4 rounded ${
            category === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => filterProducts("women's clothing")}
          className={`py-2 px-4 rounded ${
            category === "women's clothing" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Women's Clothing
        </button>
        <button
          onClick={() => filterProducts("men's clothing")}
          className={`py-2 px-4 rounded ${
            category === "men's clothing" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Men's Clothing
        </button>
        <button
          onClick={() => filterProducts("electronics")}
          className={`py-2 px-4 rounded ${
            category === "electronics" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Electronics
        </button>
        <button
          onClick={() => filterProducts("jewelery")}
          className={`py-2 px-4 rounded ${
            category === "jewelery" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Jewelry
        </button>
      </div>

      {/* Filter Images */}
      <div className="flex justify-center gap-4 my-4">
        <img
          src={allImage}
          alt="All"
          className={`w-16 h-16 rounded-full cursor-pointer ${
            category === "all" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => filterProducts("all")}
        />
        <img
          src={womensClothingImage}
          alt="Women's Clothing"
          className={`w-16 h-16 rounded-full cursor-pointer ${
            category === "women's clothing" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => filterProducts("women's clothing")}
        />
        <img
          src={mensClothingImage}
          alt="Men's Clothing"
          className={`w-16 h-16 rounded-full cursor-pointer ${
            category === "men's clothing" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => filterProducts("men's clothing")}
        />
        <img
          src={electronicsImage}
          alt="Electronics"
          className={`w-16 h-16 rounded-full cursor-pointer ${
            category === "electronics" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => filterProducts("electronics")}
        />
        <img
          src={jewelryImage}
          alt="Jewelery"
          className={`w-16 h-16 rounded-full cursor-pointer ${
            category === "jewelery" ? "ring-4 ring-blue-500" : ""
          }`}
          onClick={() => filterProducts("jewelery")}
        />
      </div>

      {/* Price Range Slider */}
      <div className="flex justify-center my-4 gap-4">
        <div className="flex items-center gap-2">
          <span>Min: ${minPrice}</span>
          <input
            type="range"
            min="0"
            max="1000"
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
          />
        </div>
        <div className="flex items-center gap-2">
          <span>Max: ${maxPrice}</span>
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white h-auto border-[1px] border-gray-200 py-6 lg:hover:scale-105 transition-all z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
              {item.category}
            </span>
            {/* ========== Product Image Start here ============== */}
            <div className="w-full h-auto flex items-center justify-center relative group">
              <img
                className="w-52 h-64 object-contain"
                src={item.image}
                alt="ProductImg"
              />
            </div>
            {/* ========== Product Image End here ================ */}
            {/* ========== Product Info Start here =============== */}
            <div className="px-4 bg-white flex flex-col gap-1 z-10">
              <div className="flex items-center justify-between">
                <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                  {item.title.substring(0, 20)}
                </h2>
                <p className="text-sm text-gray-600 font-semibold">
                  ${item.price}
                </p>
              </div>
              <div>
                <p className="text-sm">{item.description.substring(0, 100)}</p>
                <div className="text-yellow-500 flex">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <button
                onClick={(e) => {
                  // Prevent event from bubbling to the parent div
                  e.stopPropagation();
                  dispatch(
                    addToCart({
                      id: item.id,
                      title: item.title,
                      description: item.description,
                      price: item.price,
                      category: item.category,
                      image: item.image,
                      quantity: 1,
                    })
                  );
                }}
                className="w-full rounded-md mt-3 bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
            {/* ========== Product Info End here ================= */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;